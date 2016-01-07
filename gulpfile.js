// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');


// Run Server
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: false
    });
});


gulp.task('html', function () {
    return gulp
        .src('*.html')
        .pipe(livereload());
});

// Compile Sass
gulp.task('sass', function() {
    return gulp
        .src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});


// gulp.task('css', function () {
//       return gulp.src('css/*.css');
// });


// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp
        .src('js/modules/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
        .pipe(livereload());

        // .pipe(rename('all.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest('js'))
});


// Lint Task
gulp.task('lint', function() {
    return gulp
        .src('js/all.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['js/*.js'], ['lint', 'js']);
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['*.html'], ['html']);
});

// Default Task
gulp.task('default', ['connect', 'sass', 'js', 'lint', 'watch']);
