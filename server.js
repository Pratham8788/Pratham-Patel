// Simple static file server for Job Hunt Autopilot
// Run: node server.js
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);
  const ext    = path.extname(filePath);
  const mime   = MIME[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404); res.end('Not found'); return;
    }
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║   🚀  Job Hunt Autopilot — Live Server   ║');
  console.log('  ╠══════════════════════════════════════════╣');
  console.log(`  ║   Local:  http://localhost:${PORT}           ║`);
  console.log('  ╠══════════════════════════════════════════╣');
  console.log('  ║   Press Ctrl + C to stop the server      ║');
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
});
