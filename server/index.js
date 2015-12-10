'use strict';

var path = require( "path" );
var bodyParser = require( "body-parser" );
var express = require( "express" );

var app = express();

app.use( bodyParser.json() );
app.use( express.static( path.resolve( "client" ) ) );
app.use( "/dependencies", express.static( path.resolve( "node_modules" ) ) );

app.get( "/hello", function( req, res ) {
  res.send( { message: "hello, world" } )
} )

app.listen( 8080 , function onServerStart() {
  console.log( "server started" )
} );

