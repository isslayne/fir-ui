const createBaseConfig = require('./createBaseConfig')

const config = createBaseConfig({ isProd: true })

config.output
  .library('FirUI')
  .filename('[name].js')
  .libraryTarget('umd')
  .libraryExport('default')
  // Prevents webpack4 from referencing `window` in the UMD build
  // Source: https://git.io/vppgU
  .globalObject('typeof self !== "undefined" ? self : this')

module.exports = config.toConfig()
