var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function(){

})
gulp.task('html', function(){

})
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/post_styles/styles'));
})



gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	}); 
});