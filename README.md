# HTML5 Starter

A responsive mobile-first starting point for web projects.

## Installation

Requirements for this project are: ruby gem `sass`, `node.js`, `npm` and node packages: `bower` and `grunt-cli`.

Install SASS with:
```shell
gem install sass
```

or to make sure you have the latest version, update the gem:
```shell
gem update sass
```

If you don't have it already you will have to install `node` and `npm`.

Assuming you have `sass` and `node` you need to install `grunt` and `bower`.

```shell
npm install -g grunt-cli
npm install -g bower
```

Now you have all the packages required. In the project directory run:

```shell
npm install
bower install
```

This will install latest versions of all libraries: Bourbon, Neat, Normalize.css, jQuery and more. You can add more packages to `bower.json`.

## Usage

Assuming you're happy with the default configuration all you need to do is run:
```shell
grunt
```

Grunt is set up to watch for changes in the directory, compile all your sass files, minify them and reload your browser once new css is compiled. It'll also run jslint on all javascript files. 

To generate a custom modernizr file with just the things you need, run:
```shell
grunt modernizr
```



## Special Thanks to:
- Paul Irish & the HTML5 Boilerplate
- Andy Clarke for 320 & Up
- Jina for her contributions to 320 & Up (Sass version)
- Andrew Rogers for code optimization
- David Dellanave for speed & code optimization
- Eddie Machado for Bones-html used as a base

and several other developers. :)

For support and or questions please check it out on github:
https://github.com/miloszfalinski/html5-starter


## Change Log & History

### v0.2
- configured Bower and Grunt
- set up Bourbon, Neat and other frontend libraries
- added responsive javascript

### v0.1 
- ported bones by Eddie Machado
