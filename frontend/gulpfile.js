var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),  // объединяет файлы в один бандл
    cleanCSS = require('gulp-clean-css'),  // сжимает, оптимизирует
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');


gulp.task('less', function () {
  gulp.src('../less/*.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))   
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('../css'))
    .pipe(connect.reload());
});

gulp.task('jade', function () {
  gulp.src('../jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('../html'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    port: 8080,
    root: '../html',
    livereload: true
  });
});


gulp.task('watch', function () {

  gulp.watch(['../less/*.less'], ['less']);
  gulp.watch(['../jade/**/*.jade'], ['jade']);

});

gulp.task('default', ['less', 'connect', 'watch', 'jade']);
