var webdriverjs = require ( "webdriverio" )

var before = function before( callback ) {

  var options = {
    desiredCapabilities: { browserName: "firefox" }
  , logLevel: "info"
  }

  this.browser = webdriverjs.remote( options )
  this.browser.init( callback )
}

var after = function after( callback ) {
  this.browser.end( callback )
}

module.exports = function() {
  this.Before( "@browser", before )
  this.After( "@browser", after )
}

