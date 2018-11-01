const gulp = require('gulp');
const fs = require('fs-extra');

gulp.task('clean', (cb) => {
    fs.removeSync('dist');
    fs.removeSync('build');
    cb();
});

gulp.task('copy', () => {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('default',
    gulp.series('clean', 'copy'));
