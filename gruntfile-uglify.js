// Con esta tarea conseguimos agrupar todos los js y minificarlos
module.exports = function (grunt) {
  'use strict'
  grunt.initConfig({
    uglify: {
      build: {
        src: ['src/js/*.js'], // Carpeta con todos los .js
        dest: 'src/build/build.js' // Carpeta de destino
      }
    }
  })
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // Default task(s).
  grunt.registerTask('default', ['uglify'])
}
