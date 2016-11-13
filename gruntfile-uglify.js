// Nos permite agrupar archivos js y minificarlos
// https://github.com/gruntjs/grunt-contrib-uglify
// npm install grunt-contrib-uglify --save-dev
module.exports = function (grunt) {
  'use strict'
  grunt.initConfig({
    uglify: {
      build: {
        src: ['src/js/*.js'],
        dest: 'src/build/build.js'
      }
    }
  })
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify')

  // Default task(s).
  grunt.registerTask('default', ['uglify'])
}
