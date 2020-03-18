const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('say-hello', function(done) {
  console.log('Hello world');
  done();
});

gulp.task('uglify', function() {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', gulp.series('uglify'));
  gulp.watch('./src/**/*.html', gulp.series('html'));
});

gulp.task('html', () => {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('default', gulp.parallel(['server', 'watch']));
