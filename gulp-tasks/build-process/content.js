module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.projects.map(function (element, index, array) {
            return gulp.src([config.basepath.src+config.projects[index]+'/**/*',
                '!' + config.basepath.src + '{'+config.projects[index]+'/assets,'+config.projects[index]+'/assets/**}'
            ], {dot: true})
                .pipe(gulp.dest(config.basepath.build + '/'+config.projects[index]+'/'));
        });
        return tasks;
    };
};