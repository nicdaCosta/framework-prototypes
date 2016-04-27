var gulp = require('gulp'),
    browsersync = require('./gulp-tasks/browsersync'),
    jade = require('./gulp-tasks/jade');
    
 gulp.task('default', [browsersync, jade])