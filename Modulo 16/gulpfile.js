const gulp = require('gulp')
const sass = require('gul-sass')(require('sass'))

function compilaSass(){
    return gulp.src('./source/styles/main.scss').pipe(sass()).pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback){
    console.log('Executando via Gulp')
    callback();
}

function dizOi(callback){
    setTimeout(function(){
        console.log('Olá Gulp')
        callback()
    }, 1000);
}

exports.default = gulp.parallel(funcaoPadrao, dizOi)
exports.dizOi = dizOi
exports.sass = compilaSass;