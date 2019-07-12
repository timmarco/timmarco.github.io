/* jshint esversion: 6*/
const gulp = require('gulp');
const watch = require('gulp-watch');
const uglifyEs = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');
const minify = composer(uglifyEs,console);

gulp.task('default',() => {
  watchJS();
});


gulp.task('buildJs',() =>{
  gulp.src('js/src/**/*.js')
    .pipe(concat('source.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('compressJs',(cb) =>{

  pump([
    gulp.src('js/dist/source.js'),
    minify({}),
    gulp.dest('js/dist/minified/')
  ],cb);

});

gulp.task('package',() => {
  gulp.start('compressJs');
});

function watchJS() {
  console.log("---- WATCHING FOR CHANGES TO JS ---");
  gulp.watch('js/src',buildJS);
}

function buildJS() {
  gulp.src('js/src/**/*.js')
    .pipe(concat('source.js'))
    .pipe(gulp.dest('js/dist'));

  watchJS();
}
