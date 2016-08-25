/* This file is modifed based on template from course Responsive images on Udacity!

  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im', //ImageMagick
          sizes: [{
            /* Change width of these for your own needs */
            width: 2048,
            name: 'large',
            suffix: '_2x',
            quality: 50
          },

          {
            width: 1024,
            name: 'large',
            quality: 50
          },

          {
            width: 750,
            name: 'medium',
            quality: 50
          },

          {
            width: 1500,
            name: 'medium',
            suffix: '_2x',
            quality: 50
          },

          {
            width: 425,
            name: 'small',
            quality: 50
          },

		  {
            width: 900,
            name: 'small',
            suffix: '_2x',
            quality: 50
          },] // sizes
    	}, //options

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'img/'
        }] 
    	} //dev
	}, //responsive images closes

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
