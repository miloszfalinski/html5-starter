var inutil = require("./util.js");
var util = require("util");
var fs = require("fs");
var path = require("path");
var os = require("os");
var clone = require("clone");

var debug = false;
console.debug = function(msg){
  if(debug){
    console.log(msg);
  }
};

module.exports = function(cssFile, options, cb){
  if(typeof options === "function") cb = options, options = {};
  if(!options) options = {};
  if(options.debug){
    debug = options.debug;
  }
  options = clone(options);
  options.file = cssFile;
  options.callback = cb;
  var cssJoin = new CssJoin(options);
  return cssJoin;
};

var CssJoin = function(options){
  this.replaceMap = {};
  this.cssContent = {};
  options = options || {};
  if(options.paths){
    this.paths = (util.isArray(options.paths)) ? options.paths : [options.paths];
  }else{
    this.paths = [];
  }
  this.baseFile = options.file;
  this.callback = options.callback;
  this.execute();
};

CssJoin.prototype.execute = function(){
  var cb = this.callback;
  var _this = this;
  this.parseCss(this.baseFile,  function(err, file){
    var css = _this.cssContent[file];
    css = _this.extend(css,file);
    if(typeof cb === "function"){
      cb(err, css);
    }
  });
};

CssJoin.prototype.getPaths = function(addingPathFile){
  var base = this.paths.concat();
  if(addingPathFile){
    base.unshift(path.dirname(addingPathFile));
  }
  return base;
};

CssJoin.prototype.extend = function(joinedCss, file){
  var map = this.replaceMap[file];
  for(var pattern in map){
    var child = map[pattern];
    var childCss = this.cssContent[child];

    if(childCss){
      joinedCss = joinedCss.replace(pattern, childCss);
    }
    // recursive
    joinedCss = this.extend(joinedCss, child);
  }
  return joinedCss;
};

CssJoin.prototype.parseCss = function(cssFilePath, callback) {
  if(this.cssContent[cssFilePath] && this.replaceMap[cssFilePath]){
    callback(null, this.cssFilePath);
    return;
  }
  var _resolvePaths = this.getPaths(cssFilePath);
  var _this = this;
  fs.stat(cssFilePath, function(err, result){
    if(result === undefined){
      callback(err, cssFilePath);
      return;
    }
    fs.readFile(cssFilePath, 'utf-8', function(err, css){
      var _replaceMap = inutil.getReplaceMap(css, _resolvePaths);
      _this.cssContent[cssFilePath] = css;
      _this.replaceMap[cssFilePath] = _replaceMap;

      var length = Object.keys(_replaceMap).length;
      if(length === 0){
        callback(err, cssFilePath, {});
        return;
      }
      // recursive children
      var children = length;
      for(var key in _replaceMap){
        var _childFilePath = _replaceMap[key];
        _this.parseCss(_childFilePath, function(err, childFilePath){
          children--;
          if(children > 0){
            return;
          }
          callback(err, cssFilePath);
        });
      }
    });
  });
};
