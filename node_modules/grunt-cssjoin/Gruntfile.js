/*
 * grunt-cssjoin
 * https://github.com/suisho/grunt-cssjoin
 *
 * Copyright (c) 2013 suisho
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },
    copy : {
      teeTest : {
        files : [
          { expand :true,
            isFile :true,
            flatten : true,
            src :"./test/fixtures/default/*.css" ,
            dest : "tmp/sameFileTest/"
          },
          {
            src : "tmp/sameFileTest/bar.css",
            dest : "tmp/sameFileTestBefore/bar.css"
          }
        ]
      }
    },
    // Configuration to be run (and then tested).
    cssjoin: {
      defaultTest: {
        options: {
        },
        files : {
          './tmp/default/bar.css': ['./test/fixtures/default/bar.css']
        }
      },
      concatTest: {
        options: {
        },
        files : {
          './tmp/concat/concat.css': ['./test/fixtures/default/foo.css', './test/fixtures/default/bar.css']
        }
      },
      pathTest: {
        options: {
          paths : "./test/fixtures/path"
        },
        files : {
          './tmp/path/bar.css': ['./test/fixtures/path/htdocs/bar.css']
        }
      },
      pathTestWithNoOption: {
        files : {
          './tmp/path_with_no_option/bar.css': ['./test/fixtures/path/htdocs/bar.css']
        }
      },
      sameFileTest : {
        files : grunt.file.expandMapping(["./tmp/sameFileTest/*.css"]),
      }
      
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    watch : {
      files : ["**/*"],
      tasks : ['default']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean','copy', 'cssjoin', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
