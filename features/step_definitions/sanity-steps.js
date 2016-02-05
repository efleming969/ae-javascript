var assert = require( "assert" );

module.exports = function() {

  this.Given( /^I'm on the home page$/, function( callback ) {

    this.browser.get( "http://localhost:8080/" );
    callback();

  } );

  this.Then( /^I should see "([^"]*)" in the title$/, function( expectedTitle, callback ) {

    this.browser.getTitle().then( function( text ) {
      assert.equal( text, expectedTitle );
      callback()
    } );

  } );

};

