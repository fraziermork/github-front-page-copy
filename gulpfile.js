'use strict';

const gulp    = require('gulp');
const eslint  = require('gulp-eslint');
const webpack = require('webpack-stream');
const del     = require('del');


let paths = {
  appJs: [__dirname + '/app/controllers/*.js', __dirname + '/app/directives/*.js', __dirname + '/app/services/*.js'],
  htmlAndCss: [__dirname + '/app/views/*.html', __dirname + '/app/css/*.css']
};

gulp.task('eslint', () => {
  return gulp.src(paths.appJs)
    .pipe(eslint())
    .pipe(eslint.format());
});


gulp.task('build:clear', () => {
  return del([__dirname + '/build/*']);
});
gulp.task('build:js', () => {
  return gulp.src(__dirname + '/app/entry.js')
      .pipe(webpack(require(__dirname + '/webpack.config.js')))
      .pipe(gulp.dest( __dirname + '/build') );
});
gulp.task('build:htmlAndCss', () => {
  return gulp.src(paths.htmlAndCss)
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('rebuild', ['build:clear', 'build:js', 'build:htmlAndCss'], () => {
  console.log('__________________________________________________________________');
  console.log('REBUILT');
});
gulp.task('watch:app', () => {
  gulp.watch(paths.appJs, ['rebuild']);
});
