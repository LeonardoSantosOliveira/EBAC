const {src,dest,series} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")

function compilaSass(){
    return src("source/**/*.scss")
        .pipe(sass().on("error",sass.logError))
        .pipe(dest("build/"))
}

function comprimeJs (){
    return src("source/**/*.js")
        .pipe(uglify())
        .pipe(dest("build/js"))
}

function comprimeImg(){
    return src("source/images/*")
        .pipe(imagemin())
        .pipe(dest("build/images"))
}

exports.compilaSass = compilaSass
exports.comprimeJs = comprimeJs
exports.comprimeImg = comprimeImg
exports.default = series(compilaSass,comprimeJs,comprimeImg)