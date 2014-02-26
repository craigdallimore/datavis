module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-mocha'

  grunt.initConfig
    dirs:
      base:     'tempo/static/'
      js:       '<%= dirs.base %>js/'
      app:      '<%= dirs.base %>js/App/'
      scss:     '<%= dirs.base %>scss/'
      dist:     '<%= dirs.base %>dist/'
      jst:      '<%= dirs.base %>templates/'
      unittest: '<%= dirs.js %>test/specrunner/'

    # Unit testing
    mocha:
      spec:
        src: ['<%= dirs.unittest %>runner.html']
        options:
          bail: true
          reporter: 'Spec'
          run: false

    sass:
      dist:
        options:
          sourcemap: true
        files:
          '<%= dirs.dist %>app.css': '<%= dirs.scss %>main.scss'

    watch:
      unittests:
        files: '<%= dirs.unittest %>coffee/*.coffee'
        tasks: 'mocha'
      sass:
        files: '<%= dirs.scss %>**/*.scss'
        tasks: 'sass'

  grunt.registerTask 'default', ['sass']
