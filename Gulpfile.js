const { src, dest, parallel, series, watch } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const del = require('del');
const browsersync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

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
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest('./dist/app1/js')));
}

function clean() {
    return del(["dist"]);
}

function test() {
  return src('src/app1/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
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
  watch("./Gulpfile.js", series(build,browserSyncReload ));
  watch("./src/**/index.html", html);
  watch("./src/**/css/*", css);
  watch("./src/**/js/*", series(js));
  watch(["./dist/**/*"],series(browserSyncReload));
}

exports.js = js;
exports.css = css;
exports.html = html;
const build = series(clean, parallel(html, css, js));

exports.default = series(build, parallel(watchFiles, browserSync));
exports.build;