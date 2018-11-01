const gulp = require('gulp');
const fs = require('fs-extra');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('clean', (cb) => {
    fs.removeSync('dist');
    fs.removeSync('build');
    cb();
});

gulp.task('copy', () => {
    return gulp.src(['src/**/*', '!src/public/**/*.js', '!src/public/**/*.css'])
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('minify_css', () => {
    return gulp.src('src/public/**/*.css')
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('build/css'))
        .pipe(gulp.dest('dist/public'));
    done();
});

gulp.task('minify_js', () => {
    return gulp.src('src/public/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js/optimized'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/minified'))
        .pipe(gulp.dest('dist/public'));
    done();
});

gulp.task('default',
    gulp.series('clean', 'copy', gulp.parallel('minify_css', 'minify_js')));
