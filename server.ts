import express from 'express';
import compression from 'compression';
import path from 'node:path';
import fs from 'node:fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const isProduction = process.env.NODE_ENV === 'production';
  const DIST_DIR = path.resolve(process.cwd(), 'dist');
  const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

  app.use(compression());

  let vite: any;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
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

  app.use(async (req, res, next) => {
    try {
      if (!isProduction && vite) {
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
