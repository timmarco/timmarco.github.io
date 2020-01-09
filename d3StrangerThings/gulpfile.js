const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('js',() => {
  return gulp.src(['bower_components/d3/d3.min.js','js/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('css',() => {
  return gulp.src(['css/**/*.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',() => {
  gulp.watch('js/**/*.js',gulp.series('js'));
  gulp.watch('css/**/*.css',gulp.series('css'));
});
