var gulp = require('gulp');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var csscomb = require('gulp-csscomb');
var pkg = require('./package.json');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");

var browserSync = require('browser-sync').create();

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');


// Minify CSS
gulp.task('css:minify', function () {
  return gulp.src([
    './css/*.css',
    '!./css/*.min.css'
  ])
    // .pipe(csscomb())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', gulp.series('css:minify'));

// Minify JavaScript
gulp.task('js:minify', function () {
  return gulp.src([
    './js/*.js',
    '!./js/*.min.js'
  ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./'));
});

// JS
gulp.task('js', gulp.series('js:minify'));

// Default task
gulp.task('default',gulp.series('css', 'js', 'html'));

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', gulp.series('css', 'js', 'browserSync'), function () {
  gulp.watch('./js/*.js', gulp.series('js'));
  gulp.watch('./*.html', browserSync.reload);
});
