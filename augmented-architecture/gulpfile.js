const gulp = require('gulp');
const concat = require('gulp-concat');
const lint = require('gulp-eslint');

gulp.task('js',() => {
  return gulp.src(['src/js/**/**.js'])
    .pipe(lint())
    .pipe(lint.formatEach('compact',process.stderr))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('css',() => {
  return gulp.src(['src/css/**/**.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch',() => {
  gulp.watch('src/js/**/*.js',gulp.series('js'));
  gulp.watch('src/css/**/*.css',gulp.series('css'));
});
