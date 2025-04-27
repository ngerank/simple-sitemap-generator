function generateSitemap() {
    const urls = document.getElementById('urlInput').value.trim().split(/\n+/);
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n';

    urls.forEach(url => {
        if (url.trim()) {
            sitemap += '  <url>\n';
            sitemap += `    <loc>${url.trim()}</loc>\n`;
            sitemap += '  </url>\n';
        }
    });

    sitemap += '</urlset>';

    document.getElementById('sitemapOutput').value = sitemap;
    document.getElementById('outputSection').style.display = 'block';
}

function copySitemap() {
    const output = document.getElementById('sitemapOutput');
    output.select();
    document.execCommand('copy');
    alert('Sitemap copied to clipboard!');
}