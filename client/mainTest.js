var assert = require( "chai" ).assert
var Greeting = require( "./Greeting" )

describe( "greeting", function() {

  it( "should build a default message", function() {

    // arrange (given)
    var g = new Greeting()

    // act (when)
    g.build()

    // assert (then)
    assert.equal( "whatup, world", g.message )

  } )

} )

