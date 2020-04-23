const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('server', function () {
  connect.server({
    root: 'public',
    livereload: true,
    port: 8888,
  });
});
