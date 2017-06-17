module.exports = function(grunt) {

	grunt.initConfig({
	    jshint: {
	      files: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
	      options: {
	        globals: {
	          jQuery: true
	        }
	      }
	    },
	    watch: {
	      files: ['<%= jshint.files %>'],
	      tasks: ['jshint']
	    },
	    jasmine_node: {
		    options: {
		      forceExit: true,
		      match: '.',
		      matchall: false,
		      extensions: 'js',
		      specNameMatcher: 'spec'
		    },
		    all: ['spec/']
		  }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jasmine-node');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test', ['jasmine_node']);
};

