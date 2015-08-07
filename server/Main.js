var http = require ( "http" )
var path = require ( "path" )
var bodyParser = require ( "body-parser" )
var express = require ( "express" )

exports.start = function ( port, callback ) {

  var app = express ()
  var server = http.Server ( app )
  var router = new express.Router ()

  router.get ( "/api/hello", function ( req, res ) {
    res.send ( { "message":"hello" } )
  } )

  app.use ( bodyParser.json () )
  app.use ( router )

  app.use ( express.static ( path.resolve ( "target/client" ) ) )

  server.listen ( port , function () {
    callback ( server )
  } )
}
