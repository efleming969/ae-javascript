var assert = require( "assert" );

module.exports = function() {

  this.Given( /^I'm on google's home page$/, function( callback ) {

    this.browser.get( "http://www.google.com/" );
    callback();

  } );

  this.Then( /^I should see "([^"]*)" in the title$/, function( expectedTitle, callback ) {

    this.browser.getTitle().then( function( text ) {
      assert.equal( text, expectedTitle );
      callback()
    } );

  } );

};

