const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

//compile scss into css
function style() {
  return gulp
    .src('./src/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
  gulp.watch('./src/assets/scss/**/*.scss', style)
  gulp.watch('./src/*.html').on('change', browserSync.reload)
  gulp.watch('./src/assets/js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch
