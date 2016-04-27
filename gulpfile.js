var gulp = require('gulp'),
    browsersync = require('./gulp-tasks/browsersync'),
    jade = require('./gulp-tasks/jade'),
    sass = require('./gulp-tasks/sass');
    
 gulp.task('default', [browsersync, jade], sass);