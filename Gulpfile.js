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
const projects = [ 'app1', 'app2' ];

function html() {
  return src('src/**/index.html')
    .pipe(dest('dist'))
}

function css() {
  return src('src/**/css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('dist'))
}

async function allJs () {
  return await projects.forEach( project => js(project));
}

async function js(project) {
  // const project = 'app1';

  return (browserify({entries: [`./src/${project}/js/init.js`]})
    .transform("babelify", {presets: ["@babel/preset-env"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(`./dist/${project}/js`)));
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
  watch("./Gulpfile.js", series(build, browserSyncReload ));
  watch("./src/**/index.html", html);
  watch("./src/**/css/*", css);
  watch("./src/**/js/*", series(build, browserSyncReload ));
  watch(["./dist/**/*"],series(browserSyncReload));
}

exports.allJs = allJs;
exports.css = css;
exports.html = html;
const build = series(clean, parallel(html, css, allJs));

exports.default = series(build, parallel(watchFiles, browserSync));
exports.build;