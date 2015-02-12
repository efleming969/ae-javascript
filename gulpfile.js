var gulp = require ( "gulp" )
var rename = require ( "gulp-rename" )
var gutil = require ( "gulp-util" )
var sass = require ( "gulp-sass")
var concat = require ( "gulp-concat")

gulp.task( "build:statics", buildStatics )
gulp.task( "build:styles", buildStyles )
gulp.task( "build:scripts", buildScripts )
gulp.task( "build:all", [ "build:statics", "build:styles", "build:scripts" ] )
gulp.task( "build:continuous", [ "build:all" ], continuousBuild )

function buildScripts ()
{
  var scripts =
  [ "./src/client/main.js"
  , "./src/client/Greeting.js"
  ]

  gulp
    .src( scripts )
    .pipe( concat( "index.js") )
    .pipe( gulp.dest( "target/client" ) )

  buildTests()
  buildDependencies()
}

function buildStatics ()
{
  gulp
    .src( [ "src/client/index.html", "src/client/indexTest.html" ] )
    .pipe( gulp.dest ( "target/client" ) )
}

function buildStyles ()
{
  gulp
    .src( "src/client/index.sass" )
    .pipe( sass  () )
    .pipe( gulp.dest ( "target/client" ) )
}

function continuousBuild ()
{
  gulp.watch( "src/client/**.html", [ "build:statics" ] )
  gulp.watch( "src/client/**.sass", [ "build:styles" ] )
  gulp.watch( "src/client/**.js", [ "build:scripts" ] )
}

function buildDependencies ()
{
  var dependencies =
  [ "./node_modules/jquery/dist/jquery.js"
  , "./node_modules/underscore/underscore.js"
  , "./node_modules/chai/chai.js"
  , "./node_modules/sinon/pkg/sinon.js"
  , "./node_modules/mocha/mocha.js"
  , "./node_modules/mocha/mocha.css"
  ]

  gulp
    .src( dependencies )
    .pipe( gulp.dest ( "target/client/dependencies" ) )
}

function buildTests ()
{
  var tests =
  [ "./src/client/mainTest.js"
  ]

  gulp
    .src( tests )
    .pipe( concat( "indexTest.js") )
    .pipe( gulp.dest( "target/client" ) )
}
