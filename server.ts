import express from 'express';
import compression from 'compression';
import path from 'node:path';
import fs from 'node:fs';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const DIST_DIR = path.resolve(process.cwd(), 'dist');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

app.use(compression());

// Handle static assets from dist
app.use(express.static(DIST_DIR, {
  extensions: ['html'],
  index: false
}));

// Fallback to public folder if asset exists there
if (fs.existsSync(PUBLIC_DIR)) {
  app.use(express.static(PUBLIC_DIR, {
    index: false
  }));
}

// Clean URL routing for static pages
app.get('*', (req, res, next) => {
  const reqPath = req.path.replace(/\/$/, '') || '/index';
  
  // Check exact HTML file in dist
  const htmlPath = path.join(DIST_DIR, `${reqPath}.html`);
  if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
    return res.sendFile(htmlPath);
  }

  // Check direct file in dist
  const directPath = path.join(DIST_DIR, reqPath);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    return res.sendFile(directPath);
  }

  // Root fallback
  if (reqPath === '/index' || reqPath === '') {
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
  }

  // SPA fallback
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  next();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
