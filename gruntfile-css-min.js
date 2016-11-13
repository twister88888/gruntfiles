// Nos permite minificar el código CSS
// https://github.com/gruntjs/grunt-contrib-cssmin
// npm install grunt-contrib-cssmin --save-dev
module.exports = function (grunt) {
  'use strict'
  grunt.initConfig({
    cssmin: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }]
    }
  })

  grunt.loadNpmTasks('grunt-contrib-cssmin')

  // Default task(s).
  grunt.registerTask('default', ['cssmin'])
}
