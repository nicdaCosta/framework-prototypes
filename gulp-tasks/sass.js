var gulp = require('gulp'),
    sass = require('gulp-sass'),
    taskName = 'sass';
    
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});
 
module.exports = taskName;