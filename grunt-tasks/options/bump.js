module.exports = {
    options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitMessage: 'chore(version): v%VERSION% [skip ci]',
        commitFiles: ['package.json', 'bower.json', 'CHANGELOG.md'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: '`$(git rev-parse --abbrev-ref HEAD)`',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
    }
};