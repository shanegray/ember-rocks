var gulp = require('gulp'),
  log = require('gulp-util').log,
  jshint = require('gulp-jshint');

var lintFiles = [
  'src/commands/*.js',
  'src/utils/*.js',
  'src/skeletons/core/*.js',
  '!node_modules/**'
];

gulp.task('lint', function() {
  log('Linting Files');
  return gulp.src(lintFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  log('Watching Files');
  gulp.watch(lintFiles, ['lint']);
});

gulp.task('default', ['lint', 'watch']);
