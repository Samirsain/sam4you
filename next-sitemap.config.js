/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://sam4you.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/sitemap.xml', '/sitemap', '/robots.txt'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://sam4you.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changeFrequency based on path
    let priority = 0.7;
    let changeFrequency = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (path.startsWith('/services') || path.startsWith('/ai-tools')) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changeFrequency = 'monthly';
    } else if (path.startsWith('/tools/')) {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else if (path.startsWith('/about')) {
      priority = 0.7;
      changeFrequency = 'monthly';
    } else if (path.startsWith('/privacy') || path.startsWith('/terms')) {
      priority = 0.3;
      changeFrequency = 'yearly';
    }

    return {
      loc: path,
      changefreq: changeFrequency,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};
