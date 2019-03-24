var gulp = require('gulp'), 
watch = require('gulp-watch'), 
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

// gulp 'tasks'
gulp.task('default', function() {
    console.log('BOOYAH!');
});

gulp.task('html', function() {
    console.log("OOHH YEEAAAHHHH");
}); 

// gulp-watch
gulp.task('style', function() {
    return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/style/**/*.css', function() {
        gulp.start('style');
    });
});