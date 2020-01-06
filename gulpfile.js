const gulp = require('gulp');
const concat = require('gulp-concat');
const lint = require('gulp-eslint');

gulp.task('js',() => {
  return gulp.src(['src/js/**/**.js','node_modules/d3/dist/d3.min.js',"node_modules/swipejs/build/swipe.min.js"])
    .pipe(lint())
    .pipe(lint.formatEach('compact',process.stderr))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('src/dist'));
});

gulp.task('css',() => {
  return gulp.src(['src/css/**/**.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/dist'));
});

gulp.task('watch',() => {
  gulp.watch('src/js/**/*.js',gulp.series('js'));
  gulp.watch('src/css/**/*.css',gulp.series('css'));
});
