var fs = require("fs");
var path = require("path");
var clone = require("clone");

var IMPORT_REGEXP = /@import\s.+;/g;

/**
 * Find existent file.
 * @see less/lib/index.js
 * @param  {String} file  Search file
 * @param  {Array}  paths Search paths
 * @return {String}
 */
function resolvePath(file, resolvePaths){
  var pathname = null;
  //paths
  var paths = resolvePaths.concat(); //deep copy
  paths.unshift('.');
  for (var i = 0; i < paths.length; i++) {
    try {
      pathname = path.join(paths[i], file);
      fs.statSync(pathname);
      return pathname;
    } catch (e) {
      pathname = null;
    }
  }
  return pathname;
}

function removeComments(css){
  if(css){
    return css.replace(/\/\*[\s\S]*?\*\//g,"");
  }
  return css;
}

function trimQuote(syntax){
  if(/^'(.*)'$/.test(syntax)){
    syntax = syntax.replace(/^'/,'');
    syntax = syntax.replace(/'$/,'');
    return syntax
  }
  if(/^"(.*)"$/.test(syntax)){
    syntax = syntax.replace(/^"/,'');
    syntax = syntax.replace(/"$/,'');
    return syntax;
  }
  return syntax;
}
function findImportFile(syntax){
  var URL_REGEXP = /url\((.*)\)/
  if(URL_REGEXP.test(syntax)){
    var matches = syntax.match(URL_REGEXP);
    return trimQuote(matches[1]);
  }
  var FILE_REGEXP = /"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/;
  if(FILE_REGEXP.test(syntax)){
    var matches = syntax.match(FILE_REGEXP);
    var fileName = matches[1] || matches[2];
    return fileName
  }
}

function getReplaceMap(css, resolvePaths){
  var _replaceMap = {};

  // remove comment
  css = removeComments(css);

  // get import sytax;
  var importMatches = css.match(IMPORT_REGEXP);
  if(importMatches === null){
    return _replaceMap;
  }
  for(var i=0; i < importMatches.length; i++ ){
    var importSyntax = importMatches[i];

    var fileName = findImportFile(importSyntax)
    if(/\.css$/.test(fileName) === false){
      continue;
    }
    var file = resolvePath(fileName, resolvePaths);
    if(!file){
      continue;
    }
    _replaceMap[importSyntax] = file;
  }
  return _replaceMap;
}

module.exports = {
  _resolvePath : resolvePath,
  _removeComments : removeComments,
  getReplaceMap : getReplaceMap,
  getReplaceMapByFile : function(cssFilePath, resolvePaths, cb){
    var _this = this;
    // add resolve path
    var _resolvePaths = cloneArray(resolvePaths);
    _resolvePaths.unshift(path.dirname(cssFilePath));
    // read file
    fs.readFile(cssFilePath, 'utf-8', function(err, css){
      var _replaceMap = _this.getReplaceMap(css, _resolvePaths);
      cb(err, _replaceMap);
    });
  }
}
