const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  assetPrefix: !debug ? '' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/info': { page: '/info' },
      '/fotografia': { page: '/fotografia' },
      '/contato': { page: '/contato' },
      '/webDev': { page: '/webDev' },
    }
  },
}
