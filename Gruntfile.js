module.exports = function(grunt){

  grunt.initConfig({
		
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

