var gulp = require ( "gulp" )
var rename = require ( "gulp-rename" )
var gutil = require ( "gulp-util" )
var sass = require ( "gulp-sass")
var browserify = require ( "gulp-browserify" )
var ChildProcess = require ( "child_process" )

gulp.task ( "statics"
, function () {
    gulp.src ( "src/client/index.html" )
        .pipe ( gulp.dest ( "target/client" ) )
  } )

gulp.task ( "styles"
, function () {
    gulp.src ( "src/client/index.sass" )
        .pipe ( sass  () )
        .pipe ( gulp.dest ( "target/client" ) )
  } )

gulp.task ( "browserify"
, function () {
    gulp.src ( "src/Client.js" )
        .pipe ( browserify ( {} ) )
        .pipe ( rename ( "index.js" ) )
        .pipe ( gulp.dest ( "target/client" ) )
  } )

gulp.task ( "test:units"
, function () {
    
    var cp = ChildProcess.spawn ( "./node_modules/.bin/nodeunit"
    , [ "test/units" ] )

    cp.stdout.pipe ( process.stdout )
    cp.stderr.pipe ( process.stderr )
  } )

gulp.task ( "test:integrations"
, function () {
    
    var cp = ChildProcess.spawn ( "./node_modules/.bin/nodeunit"
    , [ "test/integrations" ] )

    cp.stdout.pipe ( process.stdout )
    cp.stderr.pipe ( process.stderr )
  } )

gulp.task ( "test:features", [ "statics", "styles" ]
, function () {
    
    var featuresToRun = []

    if ( gutil.env.only )
      featuresToRun.push ( "test/features/" + gutil.env.only + ".feature" )
    else
      featuresToRun.push ( "test/features" )

    var cp = ChildProcess.spawn ( "./node_modules/.bin/cucumber-js" , featuresToRun )

    cp.stdout.pipe ( process.stdout )
    cp.stderr.pipe ( process.stderr )
  } )

gulp.task ( "test", [ "test:units" ] ) //, "test:integrations", "test:features" ] )

gulp.task ( "default"
, function () {
    gulp.start ( "statics", "styles", "browserify" )

    gulp.watch ( "src/client/**/*.sass", [ "styles" ] )
    gulp.watch ( "src/**/*.js", [ "browserify" ] )
  } )

gulp.task ( "tdd"
, function () {
    gulp.start ( "statics", "styles", "browserify", "test:units"
    , "test:integrations" )

    gulp.watch ( "src/**/*.js" , [ "test:units", "test:integrations" ] )
  } )

gulp.task ( "bdd"
, function () {
    gulp.start ( "statics", "styles", "browserify", "test:features" )

    gulp.watch ( [ "src/**/*.js", "test/features/**/*" ]
    , [ "test:features" ] )

  } )
