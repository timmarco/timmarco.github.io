const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('js',() => {
  return gulp.src(['app/js/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('css',() => {
  return gulp.src(['app/css/**/*.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('watch',() => {
  gulp.watch('app/js/**/*.js',gulp.series('js'));
  gulp.watch('app/css/**/*.css',gulp.series('css'));
});
