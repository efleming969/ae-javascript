var assert = require ( "assert" )
var Greeting = require ( "../../src/client/Greeting" )

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

  this.Given(/^A standard greeting module$/, function (callback) {
    this.greeting = new Greeting()
    callback()
  });
  
  this.When(/^I ask for a message$/, function (callback) {
    this.result = this.greeting.build()
    callback()
  });
  
  this.Then(/^I should get "([^"]*)"$/, function (arg1, callback) {
    assert.equal( this.result, arg1 )
    callback()
  });
}
