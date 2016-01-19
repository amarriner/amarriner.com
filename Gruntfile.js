module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            dist: ['dist/**/*'],
        },
        
        concat: {
            css: {
                src: [
                    'src/libs/html5-boilerplate/dist/css/normalize.css',
                    'src/libs/html5-boilerplate/dist/css/main.css',
                    'src/libs/font-awesome/css/font-awesome.css'
                ],
                dest: 'src/css/libs.css'
            }
        },
        
        copy: {
            css: {
                files: [
                    {
                        expand: false,
                        src: ['src/css/app.css'],
                        dest: 'dist/css/app.css'
                    },
                    {
                        expand: false,
                        src: ['src/css/libs.css'],
                        dest: 'dist/css/libs.css'
                    }
                ]
            },

            fontAwesome: {
                files: [{
                    expand: true,
                    cwd: 'src/libs/font-awesome/fonts',
                    src: ['*'],
                    flatten: true,
                    dest: 'dist/fonts/'
                }]
            },
            
            images: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['*'],
                    flatten: true,
                    dest: 'dist/images/'
                }]
            },
        },
        
        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    dest: 'dist/css',
                    src: ['app.css', 'libs.css'],
                    ext: '.min.css'
                }]
            }
        },
        
        htmlangular: {
            options: {
                customattrs: [
                ],
                customtags: [
                ],
                reportpath: null,
                reportCheckstylePath: null,
                tmplext: 'html'
            },
            files: {
                src: ['src/js/views/**/*.html']
            }
        },
        
        jshint: {
            all: [
                "Gruntfile.js",
                "server.js",
                "src/js/**/*.js"
            ]
        },
        
        jsonlint: {
            all: [
                "package.json",
                "bower.json",
                ".bowerrc"
            ]
        },
        
        less: {
            app: {
                files: {
                    "src/css/app.css": "src/less/app.less"
                }
            }
        },

        uglify: {
            concat: {
                options: {
                    compress: false,
                    preserveComments: true
                },
                files: {
                    'dist/js/app.js': [
                        'src/js/**/*.js'
                     ]
                }
            },
            
            minify: {
                files: {
                    'dist/js/app.min.js': ['dist/js/app.js']
                }
            }
        },
        
        watch: {
            js: {
                files: [
                    'src/js/**/*.js', 
                    'src/js/views/**/*.html', 
                    'Gruntfile.js',
                    'server.js',
                    '*.json', 
                    '.bowerrc'
                ],
                tasks: ['lint']
            },
            
            less: {
                files: 'src/less/app.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-angular-validate');
    grunt.loadNpmTasks('grunt-jsonlint');
    
    grunt.registerTask('lint', ['htmlangular', 'jsonlint', 'jshint' ]);
    grunt.registerTask('minify', ['uglify:concat', 'replace', 'uglify:minify', 'concat:css', 'copy:css', 'cssmin']);
    grunt.registerTask('build', ['clean:dist', 'lint', 'minify', 'copy:fontAwesome', 'copy:images']);
    
};