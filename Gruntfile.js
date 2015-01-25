module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    less: {
      less_development: {
        src: ['css/development.less'],
        dest: 'css/development.css',
      },
      less_media: {
        src: ['css/development_media.less'],
        dest: 'css/development_media.css',
      },
      production: {
        options: {
          paths: ["css"],
          cleancss: true
        },
        files: {
          "css/app.css": [
            "css/development.less",
            "css/development_media.less"
          ]
        }
      }
    },

    cssmin: {
      app: {
        src: ['css/app.css'],
        dest: 'css/app.css',
      }
    },

    uglify: {
      app: {
        src: ['js/bootstrap.min.js', 'js/smint.js'],
        dest: 'js/app.js',
      },
    },


    watch: {
      qunit: {
        files: ['**/*.php']
      },

      markup: {
        files: ['**/*.php'],
        options: {
          livereload: true,
        }
      },

      less: {
        files: ['css/development.less', 'css/development_media.less'],
        tasks: ['less:less_development', 'less:less_media'],
        options: {
          livereload: true,
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.registerTask('lesscss', ['less:less_development', 'less:less_media' ]);
  // grunt.registerTask('production', ['less:production', 'cssmin', 'uglify' ]);
  grunt.registerTask('production', ['less:production']);

};