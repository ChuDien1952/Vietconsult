const fs = require('fs');
const path = require('path');

// Routes that need redirect pages (without locale prefix)
const routes = [
  'services',
  'services/rekrutierung-auswahl',
  'services/sprach-kulturelle-bildung',
  'services/anerkennung',
  'services/relocation-integration',
  'uber-uns',
  'partner-talentscare',
  'vorteile',
  'guetezeichen',
  'kontakt',
];

// Redirect HTML template
const getRedirectHTML = (targetPath) => `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=/de/${targetPath}">
  <script>
    window.location.replace('/de/${targetPath}' + window.location.search + window.location.hash);
  </script>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #202C58 0%, #1C1D20 100%);
      color: white;
    }
    .spinner {
      border: 4px solid rgba(255, 188, 0, 0.3);
      border-top: 4px solid #FFBC00;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div>
    <div class="spinner"></div>
    <p>Redirecting...</p>
    <noscript>
      <p>If you are not redirected, <a href="/de/${targetPath}" style="color: #FFBC00;">click here</a>.</p>
    </noscript>
  </div>
</body>
</html>`;

// Create redirect pages
const outDir = path.join(__dirname, '../out');

routes.forEach(route => {
  const routePath = path.join(outDir, route);
  const htmlPath = path.join(routePath, 'index.html');

  // Create directory if it doesn't exist
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }

  // Write redirect HTML
  fs.writeFileSync(htmlPath, getRedirectHTML(route + '/'));
  console.log(`Created redirect: ${route}/index.html -> /de/${route}/`);
});

console.log('\nRedirect pages generated successfully!');
