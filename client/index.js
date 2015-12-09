var Greeting = function Greeting () {
  this.message = "";
};

Greeting.prototype.build = function () {
  this.message = "hello, world"
};

var main = function() {
  var g = new Greeting();
  g.build()
  console.log( g.message )
};

