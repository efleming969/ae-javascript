'use strict';

var Main = require ( "./Main" )

Main.start ( 8080, "./src/client", function ( server ) {
  console.log ( "server started" )
} )
