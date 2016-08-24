require( 'chromedriver' )

var assert = require( "chai" ).assert
var selenium = require( "selenium-webdriver" );
var wdio = require( 'webdriverio' )

console.log( wdio )

var createWebDriver = function () {
  return new selenium.Builder()
    .withCapabilities( selenium.Capabilities.chrome() )
    .build();
};

describe( "sanity test", function () {

  this.timeout(999999);

  it( "sanity", function ( done ) {

    var wd = createWebDriver()
    wd.get( "http://localhost:8080/" );
    wd.getTitle().then( function( text ) {
      assert.equal ( text, "Welcome" );
      wd.quit();
      done();
    } );

  } );

} );

