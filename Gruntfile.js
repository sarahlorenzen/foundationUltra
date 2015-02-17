module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byType',
                    install: true,
                    copy: false,
                    verbose: true,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },
         copy: {
            install: {
                files: [
                    /**
                     * First Copy all of the js over this will mean that we can
                     * Edit a copy of the script without effecting the original 
                     */              
                    {
                        // Copy Foundation Core
                        nonull: true,
                        mode: 777,
                        src: 'src/foundation-apps/js/angular/services/foundation.core.js', dest: 'js/foundation-apps/services/foundation.core.js'
                    },
                    {
                        // Copy Hammer Js
                        nonull: true,
                        mode: 777,
                        src: 'src/hammerjs/hammer.js', dest: 'js/vendor/hammer.js'
                    },
                    {
                        // Copy Angular Js
                        nonull: true,
                        mode: 777,
                        src: 'src/angular/angular.js', dest: 'js/angular/angular.js'
                    },
                    {
                        // Copy Angular Animate Js
                        nonull: true,
                        mode: 777,
                        src: 'src/angular-animate/angular-animate.js', dest: 'js/angular/angular-animate.js'
                    },
                    {
                        // Copy Angular Foundation Js
                        nonull: true,
                        mode: 777,
                        src: 'src/angular-foundation/mm-foundation-tpls.js', dest: 'js/angular-foundation/mm-foundation-tpls.js'
                    },
                    /**
                     * Now the required Fonts all into fonts folder
                     */
                    {
                        // Copy All FontAwesome font files
                        expand: true,
                        nonull: true,
                        mode: 777,
                        flatten: true,
                        src: 'src/fontawesome/fonts/*', dest: 'fonts/'
                    },          
                     /**
                     * Now the required Fonts all into fonts folder
                     */
                    {
                        // Copy All FontAwesome SCSS files
                        expand: true,
                        nonull: true,
                        mode: 777,
                        flatten: true,
                        src: 'src/fontawesome/scss/*', dest: 'scss/fontawesome/'
                    },                  
                    {
                        // Copy All FoundationSites SCSS files
                        expand: true,
                        nonull: true,
                        cwd:'src/foundation/scss/',
                        mode: 777,
                        flatten: false,
                        src: '**', dest: 'scss/foundationSites/'
                    },
                    {
                        // Copy All foundationApps SCSS files
                        expand: true,
                        nonull: true,
                        cwd:'src/foundation-apps/scss/',
                        mode: 777,
                        flatten: false,
                        src: '**', dest: 'scss/foundationApps/'
                    }                    
                ]
            }
        },
        sass: {
            build: {
                options: {// Target options
                    style: 'expanded',
                    trace: true,
                    compass: true,
                    require: [],
                    sourcemap: 'none',
                    loadPath: [
                        // Path to font awesome
                        'scss/fontawesome/',
                        // Path to foundation Sites
                        'scss/foundationSites/',
                        // Path to foundation Apps
                        'scss/foundationApps/',
                        'scss/'
                    ]
                },
                files: {
                    'css/fontawesome.css': 'scss/fontawesome/font-awesome.scss',
                    'css/foundation.css': 'scss/foundationSites/foundation.scss',
                    'css/foundationApps.css': 'scss/foundationApps/foundation.scss'
                }
            }
        },
        watch: {
            // Watch for changes to any scss file 
            sass: {
                files: ['scss/**'],
                tasks: ['sass'],
                options: {
                }
            },
        },
    });
    // Load in the NPM Tasks

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Set the default task to complete when grunt is run
    grunt.registerTask('default', ['bower:install', 'copy']);

};