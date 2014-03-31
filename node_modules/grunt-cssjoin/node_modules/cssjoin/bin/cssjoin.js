#!/usr/bin/env node
var os = require("os");
function list(val) {
  // @see less.js/bin/lessc
  return val.split(os.type().match(/Windows/) ? ';' : ':')
}

var program = require('commander');
program
  .option("-d --debug", "Debugging")
  .option("-p --path <path ...>", "searching paths.",list)
  .option("-p --include-path <path ...>", "Same as path option", list)
  .usage("[options] <input>")
  .parse(process.argv);

var cssjoin = require("../lib/cssjoin.js");
var paths = program.path || program.includePath
var options = {
  paths : paths
};
cssjoin(program.args[0],options, function(err,result){
  if(err){
    process.stderr.write(err + "\n");
  }else{
    process.stdout.write(result);
  }
})

