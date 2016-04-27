var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    jade = require('./jade'),
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
    
});

module.exports = taskName;
