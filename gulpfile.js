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
    livereload: true
  });
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(livereload());
});

// gulp.task('css', function () {
//       return gulp.src('css/*.css');
// });

gulp.task('html', function () {
      return gulp.src('*.html')
            .pipe(livereload());
});


// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('../bowl/js/*.js', ['lint', 'scripts']);
    // gulp.watch(['../bowl/css/*.css'], ['css'])
    gulp.watch(['../bowl/scss/*.scss'], ['sass']);
    gulp.watch(['../bowl/*.html'], ['html']);
});

// Default Task
gulp.task('default', ['connect', 'lint', 'sass', 'scripts', 'watch']);
