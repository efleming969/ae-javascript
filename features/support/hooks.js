var selenium = require( "selenium-webdriver" );

var before = function before( callback ) {
  this.browser = new selenium.Builder()
    .withCapabilities( selenium.Capabilities.firefox() )
    .build();

  callback();
}

var after = function after( callback ) {
  this.browser.quit();
  callback();
}

module.exports = function() {
  this.Before( "@e2e", before )
  this.After( "@e2e", after )
}

