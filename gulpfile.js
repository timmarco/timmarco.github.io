const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('js',() => {
  return gulp.src(['app/src/js/**/*.js',"node_modules/d3/dist/d3.min.js","node_modules/@vimeo/player/dist/player.min.js"])
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('app'));

});

gulp.task('css',() => {
  return gulp.src(['app/src/css/**/**.css','app/sketchbook/src/css/*.css'])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('app'));
});


gulp.task('watch',() => {
  gulp.watch('app/src/js/**/*.js',gulp.series('js'));
  gulp.watch('app/src/css/**/*.css',gulp.series('css'));
});
