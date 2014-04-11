# HTML5 Starter

A responsive mobile-first starting point for web projects built on the latest and coolest.

## Features

* **HTML5 and normalize.css** - `index.html` is based on the HTML5 Boilerplate and included is the latest version of `normalize.css` - the best CSS reset available.
* **LiveReload** - automatically reloads the browser on file change - no apps required.
* **SASS** - stylesheets are compiled from SASS. Project comes bundled with latest versions of [Bourbon](http://bourbon.io) and [Neat](http://neat.bourbon.io).
* **Responsive first CSS** - SASS files are broken down into breakpoints. You start with styling the mobile version first in `base.scss`, then build on top of it, by adding code to respective breakpoint files - eg. contents of `1030up.scss` will be loaded only on a desktop browser.
* **Autocompiled Modernizr** - automatically compiles modernizr by scanning your css and javascript and determining required features - eg. if it detects an svg file in your code, it will automatically add the `svg` check to modernizr.
* **Responsive Javascript** - `scripts.js` has a snippet that will let you load  Javascript code depending on the browser width. This is already optimized for speed so it fires only once, after the `$(window).resize` event.

## Installation

Once you download or clone the repository to your hard drive, you'll need to install some things. Requirements for this project are: ruby gem `sass`, `node.js`, `npm` and node packages - `bower` and `grunt-cli`. NOTE: If you're using Windows, the setup process is probably a bit different.

Install SASS with:
```shell
gem install sass
```

or to make sure you have the latest version, update the gem:
```shell
gem update sass
```

If you don't have it already you will have to install `node` - instructions on the [official website](http://nodejs.org). 

Now that you have `sass` and `node`, you need to install `grunt` and `bower`.

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

If you're happy with the default configuration all you need to do is run:
```shell
grunt
```

Grunt is set up to **watch** for changes in the directory, **compile** all your scss files, **minify** them and **reload** your browser once new css is compiled. It'll also run **jslint** on all javascript files and **generate** a custom modernizr javascript file loading only the features you need to detect. Custom features can be added in `Gruntfile.js` under `modernizr > dist > extra`. If you need to adapt the framework to a different directory structure and `watch` stops working, you'll need to add the new paths to `Gruntfile.js` under `watch`. 


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
