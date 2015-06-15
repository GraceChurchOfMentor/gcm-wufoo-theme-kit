module.exports = function(grunt) {
    var autoprefixer = require('autoprefixer-core');
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "css/gcm.css": "less/gcm.less",
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    autoprefixer({ browsers: ['last 2 version'] }).postcss
                ]
            },
            dist: { src: 'css/gcm.css' }
        },
        watch: {
            options: {
                livereload: true,
            },
            less: {
                files: [ '**/*.less' ], // which files to watch
                tasks: [ 'less', 'postcss' ],
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '',
                    livereload: true
                }
            }
        }
    });
    
    grunt.registerTask('default', ['connect', 'watch']);
};
