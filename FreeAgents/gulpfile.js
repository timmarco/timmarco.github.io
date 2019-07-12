/* jshint esversion:6 */

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('js', function(){
  console.log("Minifying Javascript");
  return gulp.src(['js/**/*.js'])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  console.log("WATCH IS ON");
  gulp.watch('js/**/*.js', gulp.series('js'));
});
