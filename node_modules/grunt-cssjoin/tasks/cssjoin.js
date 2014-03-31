/*
 * grunt-cssjoin
 * http://gruntjs.com/
 *
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
var cssjoin = require('cssjoin');
module.exports = function(grunt) {

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  grunt.registerMultiTask('cssjoin', 'Merge css @import', function() {
    var options = this.options(this, {
    });
    grunt.verbose.writeflags(options, 'Options');
    var done = this.async();
    //this.file.dest = path.normalize(this.file.dest);
    grunt.util.async.forEachSeries(this.files, function(f, nextFileObj){
      var destFile = f.dest;
      var files = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      if (files.length === 0) {
        // No src files, goto next target. Warn would have been issued above.
        nextFileObj();
      }
      var compiled = [];
      
      grunt.util.async.concatSeries(files, function(file, next) {
        cssjoin(file, options, function(err ,css){
          if(!err){
            compiled.push(css);
            next(null);
          }else{
            nextFileObj(false);
          }
        });
      }, function(){
         if (compiled.length < 1) {
          grunt.log.warn('Destination not written because compiled files were empty.');
        } else {
          grunt.file.write(destFile, compiled.join(grunt.util.normalizelf(grunt.util.linefeed)));
          grunt.log.writeln('File ' + destFile.cyan + ' created.');
        }
        nextFileObj();
      });
      //console.log(joinedCss);
    }, done);
  });
};