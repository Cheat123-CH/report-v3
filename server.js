const jsreport = require('jsreport')()

const PORT = process.env.PORT || 5488

if (process.env.JSREPORT_CLI) {
  module.exports = jsreport
} else {
  jsreport.init().then(() => {
    console.log(`jsReport server running on port ${PORT}`)
  }).catch((e) => {
    console.error('jsreport startup failed:')
    console.error(e.stack)
    process.exit(1)
  })
}