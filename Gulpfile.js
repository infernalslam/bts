const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('build-bts-bulma', function () {
  const outputConfigs = {
    src: './src/assets/bulma.css',
    prefix: 'bts.',
    basename: 'full'
  }
  generateCSS(outputConfigs)
})
function generateCSS ({ src = '', prefix = '', basename = '' }) {
  gulp
    .src(src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(
      rename({
        basename,
        prefix,
        suffix: '.min',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./css-bts-bulma/'))
}
