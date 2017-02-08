var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),  // объединяет файлы в один бандл
    cleanCSS = require('gulp-clean-css'),  // сжимает, оптимизирует
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    mainBowerFiles = require('main-bower-files');



gulp.task('less', function () {
  gulp.src('../less/style.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
            browsers: ['> 0.5%','last 10 versions'],
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
    root: '../',
    livereload: true
  });
});


gulp.task('watch', function () {

  gulp.watch(['../less/**/*.less'], ['less']);
  gulp.watch(['../jade/**/*.jade'], ['jade']);

});

gulp.task('default', ['less', 'connect', 'watch', 'jade']);
