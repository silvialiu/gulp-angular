'use strict';
var fs = require('fs'),
    gulp = require('gulp');

fs.readdirSync(__dirname + '/gulptask').forEach(function(module) {
  require(__dirname + '/gulptask/' + module);
});




/**  ----------  task run ------------- **/


gulp.task('default', ['']);

gulp.task('dev', ['js_app:dev', 'image', 'css']);

gulp.task('watch', ['clean'], function(){
    gulp.start('dev');
    livereload.listen(35729);

    gulp.watch(config.src_html, ['html']);
    gulp.watch(config.src_scss, ['css']);
    gulp.watch(config.src_img, ['image']);
})

/*
gulp.task('watch', ['js_app:dev', 'image'], function(){

	livereload.listen(35729);

    gulp.watch(config.src_html, ['html']);
    gulp.watch(config.src_img, ['image']);
});
*/

gulp.task('build', sequence('clean', 'js_app:build', 'image'));
