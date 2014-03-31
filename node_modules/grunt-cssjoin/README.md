# grunt-cssjoin

Extend and join css @import loaded file
- If you want cssjoin without grunt, check [cssjoin](http://github.com/suisho/cssjoin) rebository

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssjoin --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssjoin');
```

## The "cssjoin" task

### Overview
In your project's Gruntfile, add a section named `cssjoin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssjoin: {
    production : {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    }
  },
})
```

### Options

#### options.paths
Type: `Array` or `String`
Css @import resolve include paths()

### Usage Examples

#### Default Options
In this example, execute [cssjoin](http://github.com/suisho/cssjoin) to single convert.

```js
grunt.initConfig({
  cssjoin: {
    join :{
      files: {
        'dest/bar.css': ['src/bar.css'],
      },
    }
  },
})
```

#### Path Options
In this example, setting cssjoin's paths.

```js
grunt.initConfig({
  cssjoin: {
    path_option :{
      options: {
        paths : ["src/"]
      },
      files: {
        'dest/default_options': ['src/foo.css', 'src/dir/bar.css'],
      },
    }
  },
})
```

#### Convert Same File.
In this example, execute [cssjoin](http://github.com/suisho/cssjoin) to same file
```js
grunt.initConfig({
  sameFile : {
    cssjoin: {
      files:  grunt.file.expandMapping(["/src/*.css"]),
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.1.1 release

