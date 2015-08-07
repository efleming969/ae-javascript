var Greeting = module.exports = function Greeting () {
  this.message = ""
}

Greeting.prototype.build = function () {
  this.message = "whatup, world"
}

