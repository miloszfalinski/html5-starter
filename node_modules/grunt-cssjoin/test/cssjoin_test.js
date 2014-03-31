'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cssjoin = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default/bar.css');
    var expected = grunt.file.read('test/expected/default/bar.css');
    test.equal(actual, expected, 'should describe what the default css is.');
    test.done();
  },
  path_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/path/bar.css');
    var expected = grunt.file.read('test/expected/path/bar.css');
    test.equal(actual, expected, 'should describe what the path option(s) behavior is.');

    test.done();
  },
  
  path_with_no_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/path_with_no_option/bar.css');
    var expected = grunt.file.read('test/expected/path_with_no_option/bar.css');
    test.equal(actual, expected, 'should describe what the path option(s) behavior is not(but with path).');

    test.done();
  },
  
  sameFile: function(test) {
    test.expect(2);

    var before = grunt.file.read('tmp/sameFileTestBefore/bar.css');
    var after = grunt.file.read('tmp/sameFileTest/bar.css');
    var expected = grunt.file.read('test/expected/default/bar.css');
    
    test.notEqual(before, after, 'Before and After is different');
    test.equal(after, expected , 'After is converted');
    test.done();
  },
};
