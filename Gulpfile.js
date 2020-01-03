const { src, dest, parallel, series, watch } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const del = require('del');
const browsersync = require('browser-sync').create();
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

function html() {
  return src('src/**/index.html')
    .pipe(dest('dist'))
}

function css() {
  return src('src/**/css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('dist'))
}

function js() {
  return src('src/app1/js/*.js', { sourcemaps: true, base: 'src/app1' })
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.min.js'))
    .pipe(dest('dist/app1/js', { sourcemaps: true }))
}

function clean() {
    return del(["dist"]);
}

function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "dist"
      },
      port: 3000
    });
    done();
  }
  

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function watchFiles() {
  watch("./src/**/index.html", html);
  watch("./src/**/css/*", css);
  watch("./src/**/js/*", series(js));
  watch(
    [
      "./dist/**/*",
    ],
    series(browserSyncReload)
  );
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.build = series(clean, parallel(html, css, js));
exports.default = parallel(watchFiles, browserSync);