var webdriverjs = require ( "webdriverio" )
var Main = require ( "../../src/server/Main" )

module.exports = function () {

  this.Before("@browser", function ( callback ) {

    var self = this

    Main.start ( 8081, function ( server ) {

      self.server = server

      self.browser = webdriverjs.remote (
        { desiredCapabilities: { browserName: "firefox" }
        , logLevel: 'info' } )

      self.browser.init()

      callback ()

    } )

  } )

  this.After("@browser", function ( callback ) {

    var self = this

    self.browser.end ( function () {
      self.server.close ( callback )

    } )

  } )

}
