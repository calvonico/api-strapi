module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', "*.tinymce.com", "*.tiny.cloud", "blob:"],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com', "*.tinymce.com", "*.tiny.cloud", "cdn.jsdelivr.net", "strapi.io", "s3.amazonaws.com"],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "style-src": ["'self'", "'unsafe-inline'", "*.tinymce.com", "*.tiny.cloud"],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
