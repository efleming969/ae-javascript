var expect = chai.expect;

describe ( 'sanity', function () {

  it ( 'should fail', function () {
    var greeting = new Greeting()
    var rst = greeting.build("world")
    expect(rst).to.equal("whatup, world")
  })

  it ( 'should succeed', function () {
    var greeting = new Greeting()
    var rst = greeting.build("world")
    expect(rst).to.equal("hello, world")
  })
})
