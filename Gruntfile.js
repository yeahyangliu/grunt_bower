module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    bower: {  
      install: {
        options: {
                "targetDir": "./public/js/lib",
                "layout": "byComponent",
                "install": true,
                "verbose": false,
                "cleanTargetDir": false
              }
          }
      },
    browserSync: {
      bsFiles: {
          src : 'assets/css/*.css'
     },
      options: {
        server: {
            baseDir: "./"
        }
    }
  },
   compass: {
        app: 
        {
          options: {
          sassDir: 'sass',
          cssDir: 'stylesheets'
          }
        }
    }
    });

  // 加载包含 "uglify" 任务的插件。
  require('load-grunt-tasks')(grunt);

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify', 'compass']);

  grunt.registerTask('serve', ['uglify', 'compass', 'browserSync']);

};
