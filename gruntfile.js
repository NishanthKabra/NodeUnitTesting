module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            script: {
                files: ['**/*.js'],
                tasks: ['mochaTest']
            }
        }
    });
};
//npm install grunt grunt-mocha grunt-contrib-watch