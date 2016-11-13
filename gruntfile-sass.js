// Nos permite compilar archivos sass
// https://github.com/sindresorhus/grunt-sass
// npm install --save-dev grunt-sass
module.exports = function (grunt) {
  'use strict'
  // Project configuration.
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        sourceMapEmbed: true,
        sourceMapContents: true
      },
      dist: {
        files: {
          'src/static/css/style.css': 'src/scss/style.scss'
        }
      }
    }
  })
  // Default task.
  grunt.registerTask('default', ['sass'])
}
