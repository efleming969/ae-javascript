var assert = require( "assert" )

module.exports = function() {

  this.Given( /^I'm on the main screen$/, function( callback ) {
    this.browser.url( "http://localhost:8080" ).call( callback )
  } )

  this.Then( /^I should see "([^"]*)" in the title$/, function( expectedTitle, callback ) {
    this.browser.getTitle( function ( err, title ) {
      assert.equal( title, expectedTitle )
    } ).call( callback )
  } )

}

