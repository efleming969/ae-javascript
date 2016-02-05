var assert = require( "chai" ).assert
var selenium = require( "selenium-webdriver" );

var createWebDriver = function createWebDriver() {
  return new selenium.Builder()
    .withCapabilities( selenium.Capabilities.firefox() )
    .build();
};

describe( "sanity test", function () {

  // this tells mocha to not be so impatient is a hack
  this.timeout(999999);

  it( "sanity", function ( done ) {

    var wd = createWebDriver()
    wd.get( "http://localhost:8080/" );
    wd.getTitle().then( function( text ) {
      assert.equal ( text, "Welcome Home" );
      wd.quit();
      done();
    } );

  } );

} );

