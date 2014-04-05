module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'lib/css/style.css' : 'lib/scss/style.scss',
					'lib/css/ie.css' : 'lib/scss/ie.scss',
					'lib/css/print.css' : 'lib/scss/print.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['lib/scss/*.scss'],
				tasks: ['sass', 'cssjoin', 'modernizr']
			},
			js: {
				files: ['lib/js/*.js', 'Gruntfile.js'],
				tasks: ['jshint', 'modernizr']
			},
			html: {
				files: ['*.html', '*.php', '**/*.php', '**/*.html'],
				options: {
					livereload: true,
				}
			}
		},
		cssjoin: {
			sameFile : {
				files:  grunt.file.expandMapping(["lib/css/*.css"]),
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'lib/js/*.js']
		},
		modernizr: {
			dist: {
				'devFile': 'bower_components/modernizr/modernizr.js',
				'outputFile': 'lib/js/src/modernizr.custom.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cssjoin');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default',['watch']);
};