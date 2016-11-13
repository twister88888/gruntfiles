// Nos permite escuchar los cambios de archivos y ejecutar las tareas
// https://github.com/gruntjs/grunt-contrib-watch
// npm install grunt-contrib-watch --save-dev
module.exports = function (grunt) {
  'use strict'
  grunt.initConfig({
    watch: {
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass', 'copy']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  // Default task.
  grunt.registerTask('default', ['watch'])
}
