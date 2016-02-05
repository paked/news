var gulp = require('gulp');
var serve = require('browser-sync');
var typescript = require('gulp-typescript');
var sync = require('run-sequence');
var del = require('del');

var tsConf = require('./tsconfig.json');

gulp.task('clean', function() {
  return del('dist/**/*');
});

gulp.task('build', ['clean'], function() {
  return gulp.
    src('src/app/**/*').
    pipe(typescript(tsConf.compilerOptions)).
    pipe(gulp.dest('dist/app'));
});

gulp.task('serve', function() {
  serve({
    port: 3000,
    open: false,
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('reload', function() {
  sync(
    'copy:assets',
    serve.reload);
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.{js,html,css}', ['reload']);
});

gulp.task('copy:libs', function() {
  return gulp.src([
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js'
  ]).
  pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', function() {
  return gulp.src(['src/app/**/*', 'src/index.html', 'src/styles.css', '!src/app/**/*.ts'],
    {
      base : 'src'
    }).
    pipe(gulp.dest('dist'));
});

gulp.task('default', function(done) {
  sync('build',
       'copy:assets',
       'copy:libs',
       'serve',
       'watch',
       done);
});
