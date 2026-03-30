// SPA redirect script for GitHub Pages with custom domain
(function() {
  const path = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;

  // Check if we're at root
  if (path === '/' || path === '') {
    window.location.replace('/de/' + search + hash);
    return;
  }

  // Check if path already has locale prefix
  const hasLocale = /^\/(de|en|vi)(\/|$)/.test(path);

  if (!hasLocale) {
    // Add /de/ prefix to the current path
    window.location.replace('/de' + path + search + hash);
  }
  // If path has locale but we're here, page exists (don't redirect)
})();
