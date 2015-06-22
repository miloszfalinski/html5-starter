module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'lib/css/module.css' : 'lib/scss/module.scss',
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
				files: ['lib/scss/*.scss', 'lib/scss/**/*.scss'],
				tasks: ['sass', 'cssjoin', 'modernizr', 'autoprefixer', 'cssmin']
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
		cssmin: {
			minify: {
				expand: true,
				cwd: 'lib/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'lib/css/',
				ext: '.min.css'
			}
		},
		cssjoin: {
			sameFile : {
				files:  grunt.file.expandMapping(['lib/css/ie.css', 'lib/css/print.css', 'lib/css/style.css', 'lib/css/module.css']),
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'lib/js/*.js']
		},
		autoprefixer: {
			multiple_files: {
				expand: true,
				flatten: true,
				src: ['lib/css/ie.css', 'lib/css/print.css', 'lib/css/style.css', 'lib/css/module.css'],
				dest: 'lib/css/'
			},
		},
		modernizr: {
			dist: {
				'devFile': 'lib/src/modernizr/modernizr.js',
				'outputFile': 'lib/js/src/modernizr.custom.min.js',
				'extra' : {
					'shiv' : true
				},
				'parseFiles' : true,
				'files': {
					'src': [
						'lib/js/*.js',
						'lib/css/*.css',
						'*.html',
						'*.php',
						'**/*.php',
						'**/*.html',
						'!lib/src/modernizr/test/*.html',
					]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cssjoin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
};