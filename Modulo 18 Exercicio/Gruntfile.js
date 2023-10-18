module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                './build/styles/main.css' : 'src/styles/**/*.less'
                }
            }
        },
        uglify:{
            my_target: {
                files:{
                    'build/scripts/main.js' : 'src/scripts/**/*.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['less', 'uglify'])

}