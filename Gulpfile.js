const { src, dest, parallel, series, watch } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const del = require('del');
const browsersync = require('browser-sync').create();
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
// const BABEL_POLYFILL = './node_modules/@babel/polyfill/browser.js';

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
  return (browserify({entries: ['./src/app1/js/app.js']})
    .transform("babelify", {presets: ["@babel/preset-env"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(dest('./dist/app1/js')));
}

/*
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel({
      presets: [['@babel/env' ]
      ]
    }))
        .pipe(concat('app.min.js'))
*/

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
const build = series(clean, parallel(html, css, js));
exports.default = series(build, parallel(watchFiles, browserSync));
exports.build;