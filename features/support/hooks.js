var selenium = require( "selenium-webdriver" );

var beforeE2E = function( scenario ) {
  console.log( "============ starting browser ============" )
  this.browser = new selenium.Builder()
    .withCapabilities( selenium.Capabilities.firefox() )
    .build();
}

var afterE2E = function( scenario ) {
  console.log( "============ shutting down browser ============" )
  this.browser.quit();
}

module.exports = function() {
  this.Before( "@e2e", beforeE2E )
  this.After( "@e2e", afterE2E )
}

