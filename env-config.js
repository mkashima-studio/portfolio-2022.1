const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/portfolio-2022.1' : ''
}