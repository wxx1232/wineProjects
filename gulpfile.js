//引用gulp
var gulp = require("gulp");//类似于<script src="gulp.js">
//引入gulp-sass插件（该插件完成sass的编译，编译成CSS）
var sass = require("gulp-sass");
//复制目录下的所有html文件
//把根目录下的所有的html文件复制到发布目录下
gulp.task("copy-html",function () {
    //复制文件
    gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\wine"));
});
//复制js文件
gulp.task("copy-js",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\wine\\js"));
});
//复制php文件
gulp.task("copy-php",function(){
	gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\wine\\php"));
});

//把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-jpg",function () {
    gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\wine\\img"));
});

//sass编译
gulp.task("sassfile",function () {
    gulp.src("scss/*.scss").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\WWW\\wine\\css"));
});

//监听
	//当index.html文件有变化时，就会执行该命令，不用一直进行gulp copy-index操作了
gulp.task("watchall",function () {
	//监听该目录下的所有html文件
	gulp.watch("*.html",["copy-html"]);
	//监听php文件
	gulp.watch("*.html",["copy-php"]);
	//监听js文件
	gulp.watch("js/*.js",["copy-js"]);
	//监听图片
	gulp.watch("img/**/*",["copy-jpg"]);
	//监听sass
	gulp.watch("scss/*.scss",["sassfile"]);
});