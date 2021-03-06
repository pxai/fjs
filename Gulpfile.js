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
const projects = [ 'app1', 'app2', 'app3', 'app4' ];
const mocha = require('gulp-mocha');

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

function js(project) {
  return (browserify({entries: [`./src/${project}/js/init.js`]})
    .on('error', showError)
    .transform("babelify", {presets: ["@babel/preset-env"]})
    .on('error', showError)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest(`./dist/${project}/js`)));
}

function showError(error) {
  console.log(error);
  this.emit("end");
}

function clean () {
    return del(["dist"]);
}

function lint () {
  return src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function test () {
  return src("./test/**/*.spec.js", {read: false})
      .pipe(mocha({reporter: 'nyan'}));
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
  watch("./src/**/js/*", series(build, browserSyncReload ));
  watch("./src/**/index.html", series(html, browserSyncReload ));
  watch("./src/**/css/*", series(css, browserSyncReload ));
  watch("./test/**/*.spec.js", test)
}

exports.allJs = allJs;
exports.css = css;
exports.html = html;
const build = series(clean, parallel(html, css, allJs));

exports.default = series( build, parallel(watchFiles, browserSync));
exports.build;
