const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('gulp-pngquant');
const image = require('gulp-image');
const cache = require('gulp-cache');

gulp.task('img', function() {
  return gulp.src('src/public/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(pngquant({
      quality: '65-80'
    }))
    .pipe(gulp.dest('src/public/img'));
});

gulp.task('compress', () => {
  gulp.src('src/public/img/**/*')
    .pipe(image({
      pngquant: false
    }))
    .pipe(gulp.dest('src/public/img'));
});
