var $ = window.$ = require( "jquery" )
var R = window.R = require( "ramda" )

var Greeting = require( "./Greeting" )

$(document).ready ( function ( ) {
  var g = new Greeting();
  g.build()
  console.log( g.message )
} )

