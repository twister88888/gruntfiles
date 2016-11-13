// Nos permite copiar archivos y carpetas
// https://github.com/gruntjs/grunt-contrib-copy
// npm install grunt-contrib-copy --save-dev
module.exports = function (grunt) {
  'use strict'
  grunt.initConfig({
    copy: {
      css: {
        cwd: 'src/static/css',
        src: ['*.css'],
        dest: 'public/css',
        expand: true
      }
    }
  })
  // Copy files and folders
  grunt.loadNpmTasks('grunt-contrib-copy')
  // Default task.
  grunt.registerTask('default', ['copy'])
}
