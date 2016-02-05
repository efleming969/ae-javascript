var index = {}

index.Greeting = function Greeting () {
  this.message = "";
};

index.Greeting.prototype.build = function () {
  this.message = "hello, world"
};

index.main = function() {
  var g = new index.Greeting();
  g.build()
  console.log( g.message )
};

