module.exports = function(grunt){

  grunt.initConfig({
<<<<<<< HEAD
    jasmine_node: {
      all: ['spec/']
    },

    jshint:{
      all: ['Gruntfile.js', 'spec/**/*.js', 'src/**/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'jasmine_node']);

};
=======
		
		jshint: {
		  // define the files to lint
		  all: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  
		},

    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
    }
  
  });
	
	

  grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jasmine_node']);

};

>>>>>>> e29a5b8074f13ecfadd99a1173cdf024fa36e63e
