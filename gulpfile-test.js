'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
    root: 'site',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('bowl/*.html')
    .pipe(connect.reload());
});

gulp.task('watchHtml', function () {
  gulp.watch(['bowl/*.html'], ['html']);
});

gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('watchStyles', function() {
    gulp.watch('scss/*.scss',['styles', 'html']);
});

gulp.task('watchScripts', function() {
    gulp.watch('js/*.js',['html']);
});

// gulp.task('watchData', function() {
//     gulp.watch('site/assets/data/*.js',['html']);
// });



gulp.task('default', ['connect', 'watchHtml', 'watchStyles', 'watchScripts',]);