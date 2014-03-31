#CssJoin[![Build Status](https://travis-ci.org/suisho/cssjoin.png)](https://travis-ci.org/suisho/ccsjoin)
Join css that @import syntax loaded file.

##Install
```sh
$ npm install -g cssjoin
```

##Usage
Command line
```sh
$ cssjoin some.css
```

in node.js
```javascript
var cssjoin = require('cssjoin');

//without option
cssjoin("sample.css",function(err,extendedCss){
  console.log(extendedCss);
});

// with option
cssjoin("sample.css"
  ,{
    "paths" : "./include/path"
  }
  ,function(err,extendedCss){
    console.log(extendedCss);
  }
);


```

##Example
### Input
main.css
```css
@import "dir/parts.css";

.main{
  float: left;
}
```
dir/parts.css
```css
.block{
  color:red;
}
```

####And execute
```sh
$ cssjoin main.css
```
### Output
```css
.block{
  color:red;
}

.main{
  float: left;
}
```

## Options
#### -p --include-paths
Add @import paths.
```sh
$ cssjoin some.css -p /include/path
```
if need set some paths can use separator **":"**
```sh
$ cssjoin some.css -p /include/path:/include/path2:/include/path3
```
or on windows, use separator **";"**
```sh
$ cssjoin some.css -p C:\\include\\path\\;C:\\include\\path2\\;C:\\include\\path3\\;
```
