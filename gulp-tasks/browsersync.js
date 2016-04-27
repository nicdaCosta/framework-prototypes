var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    jade = require('./jade'),
    sass = require('./sass'),
    taskName = 'browser-sync';

// Static server
gulp.task(taskName, function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    
    gulp.watch("./build/**/*.html").on('change', browserSync.reload);
    gulp.watch("./**/*.jade", [jade]);
    
    
    gulp.watch("./build/**/*.css").on('change', browserSync.reload);
    gulp.watch("./**/*.scss", [sass]);
});

module.exports = taskName;
