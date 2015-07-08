var gulp = require('gulp');
var babelify = require("babelify");
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reload = browserSync.reload;

/**
 * Get modules, transform ES6 to ES5, bundle all code into 1 file and push to dist folder.
 */
gulp.task('babelify', function() {
  return browserify('./src/index.js',{debug: true})
    .transform(babelify)
    .bundle()
    .on("error", function(err) {
      console.log("Error : " + err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});

gulp.task('js-watch', ['babelify'], reload);

/**
 * Start server and watch for JS changes.
 */
gulp.task('default', function() {
  browserSync.init({
    server: "./dist"
  });
  gulp.watch("./src/*.js", ['js-watch']);
});
