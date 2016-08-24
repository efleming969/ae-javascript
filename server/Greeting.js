var Greeting = function () {
  this.message = ""
}

Greeting.prototype.build = function () {
  this.message = "Hello, World"
}

module.exports = Greeting
