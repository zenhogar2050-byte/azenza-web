import express from 'express';
import compression from 'compression';
import path from 'node:path';
import fs from 'node:fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();

  // Parse port from CLI arguments or environment.
  // Port 8080 is reserved for Nginx in this container environment, so default to 3000.
  const portArgIndex = process.argv.indexOf('--port');
  const cliPort = portArgIndex !== -1 && process.argv[portArgIndex + 1] ? parseInt(process.argv[portArgIndex + 1], 10) : null;
  const envPort = process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : null;
  const fallbackPort = process.env.PORT && process.env.PORT !== '8080' ? parseInt(process.env.PORT, 10) : 3000;
  const PORT = cliPort || envPort || fallbackPort;

  const isProduction = process.env.NODE_ENV === 'production';
  const DIST_DIR = path.resolve(process.cwd(), 'dist');
  const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

  app.use(compression());
  app.use(express.json());

  // API endpoints for local development & Google Sheets sync
  app.post('/api/orders', async (req, res) => {
    try {
      const webhookUrl = (process.env.GOOGLE_SHEETS_ORDERS_WEBHOOK || process.env.VITE_GOOGLE_SHEETS_ORDERS_WEBHOOK || '')?.trim();
      if (!webhookUrl) {
        return res.status(200).json({ status: 'ok', local: true, message: 'Webhook no configurado, registrado en modo local' });
      }
      const payload = {
        ...req.body,
        token: process.env.SHEETS_SECURITY_TOKEN || process.env.VITE_SHEETS_SECURITY_TOKEN || 'zenhogar_secret_2026',
        timestamp: new Date().toLocaleString()
      };
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      return res.json(result);
    } catch (e: any) {
      console.error('[API /api/orders error]:', e.message);
      return res.status(200).json({ status: 'fallback', error: e.message });
    }
  });

  app.post('/api/abandoned', async (req, res) => {
    try {
      const webhookUrl = (process.env.GOOGLE_SHEETS_ORDERS_WEBHOOK || process.env.VITE_GOOGLE_SHEETS_ORDERS_WEBHOOK || '')?.trim();
      if (!webhookUrl) {
        return res.status(200).json({ status: 'ok', local: true });
      }
      const payload = {
        ...req.body,
        type: 'abandoned',
        token: process.env.SHEETS_SECURITY_TOKEN || process.env.VITE_SHEETS_SECURITY_TOKEN || 'zenhogar_secret_2026',
        timestamp: new Date().toLocaleString()
      };
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      return res.json(result);
    } catch (e: any) {
      console.error('[API /api/abandoned error]:', e.message);
      return res.status(200).json({ status: 'fallback', error: e.message });
    }
  });

  app.get('/api/orders/status', (_req, res) => {
    return res.json({ status: 'ok', service: 'sheets-sync' });
  });

  let vite: any;
  if (!isProduction) {
    vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false
      },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    if (fs.existsSync(DIST_DIR)) {
      app.use(express.static(DIST_DIR, {
        extensions: ['html'],
        index: false
      }));
    }
  }

  if (fs.existsSync(PUBLIC_DIR)) {
    app.use(express.static(PUBLIC_DIR, {
      index: false
    }));
  }

  // HTML rendering fallback
  app.use(async (req, res, next) => {
    try {
      if (!isProduction && vite) {
        // Do not intercept static files, modules, or api routes
        if (req.path.startsWith('/api') || req.path.startsWith('/@') || req.path.includes('.')) {
          return next();
        }
        const url = req.originalUrl;
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        return res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } else {
        const reqPath = req.path.replace(/\/$/, '') || '/index';
        const htmlPath = path.join(DIST_DIR, `${reqPath}.html`);
        if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
          return res.sendFile(htmlPath);
        }
        const directPath = path.join(DIST_DIR, reqPath);
        if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
          return res.sendFile(directPath);
        }
        const indexPath = path.join(DIST_DIR, 'index.html');
        if (fs.existsSync(indexPath)) {
          return res.sendFile(indexPath);
        }
      }
      next();
    } catch (e: any) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  }).on('error', (err: any) => {
    console.error('Server failed to start:', err);
    process.exit(1);
  });
}

startServer();
