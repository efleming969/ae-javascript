var assert = chai.assert;

describe( "client-side greeting", function() {

  it( "should build a default message", function() {

    // arrange (given)
    var g = new index.Greeting();

    // act (when)
    g.build();

    // assert (then)
    assert.equal( "Hello, World", g.message );

  } );

} );

