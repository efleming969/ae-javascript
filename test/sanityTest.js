var assert = require( "chai" ).assert
var webdriverjs = require ( "webdriverio" )

describe( "sanity test", function () {

  var browser

  this.timeout(999999);

  beforeEach( function ( done ) {

    browser = webdriverjs.remote (
      { desiredCapabilities: { browserName: "firefox" }
      , logLevel: 'info'
      } )

    browser.init( done )

  } )

  afterEach( function ( done ) {
    browser.end( done )
  } )

  it( "sanity", function ( done ) {
    browser
      .url( "http://localhost:8080" )
      .getTitle( function ( err, title ) {
        assert.equal ( title, "foo" )
      } )
      .call( done )
  })

})
