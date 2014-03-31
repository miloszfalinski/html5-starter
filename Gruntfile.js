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
				tasks: ['sass', 'cssjoin']
			}
		},
		cssjoin: {
			sameFile : {
				files:  grunt.file.expandMapping(["lib/css/*.css"]),
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cssjoin');
	grunt.registerTask('default',['watch']);
}