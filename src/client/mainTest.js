var expect = chai.expect;

describe ( 'sanity', function () {

  it ( 'should succeed', function () {
    var greeting = new app.Greeting()
    var rst = greeting.build("world")
    expect(rst).to.equal("whatup, world")
  })
})
