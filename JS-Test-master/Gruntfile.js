module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jasmine_node: {
            task_name: {
                options: {
                    forceExit: true,
                    match: '.',
                    matchAll: false,
                    specFolders: ['specs'],
                    isVerbose: false,
                    extensions: 'js',
                    specNameMatcher: 'spec',
                    captureExceptions: true,
                    showColors: true
                },
                src: ['src/**']
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node-coverage');

    grunt.registerTask('unit', 'jasmine_node');
    grunt.registerTask('default', 'Empty default task', function() {});

};
