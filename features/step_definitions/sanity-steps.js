var assert = require ( "assert" )

module.exports = function () {

  this.Given(/^I'm on the main screen$/, function ( next ) {
    this.browser.url( "http://localhost:8081" ).call( next )
  })

  this.Then(/^I should see "([^"]*)" in the title$/
  , function ( expectedTitle, next ) {
    this.browser.getTitle ( function (err, title) {
      assert.equal ( title, expectedTitle )
      next()
    } )
  })
}
