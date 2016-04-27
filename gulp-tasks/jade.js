var gulp = require('gulp'),
    jade = require('gulp-jade'),
    taskName = 'templates';
    
gulp.task(taskName, function() {
  return gulp.src(['./views/**/*.jade', '!./views/**/_*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./build/'));
});

module.exports = taskName;