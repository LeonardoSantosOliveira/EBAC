const gulp = require('gulp')

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