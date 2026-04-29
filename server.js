const jsreport = require('jsreport')()

const PORT = process.env.PORT || 3000

if (process.env.JSREPORT_CLI) {
  // export jsreport instance to make it possible to use jsreport-cli
  module.exports = jsreport
} else {
  jsreport.init().then(() => {
    console.log(`jsReport server running on port ${PORT}`)
  }).catch((e) => {
    // error during startup
    console.error(e.stack)
    process.exit(1)
  })
}