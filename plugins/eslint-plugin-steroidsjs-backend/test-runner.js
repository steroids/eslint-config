const fs = require('fs');
const path = require('path');

function findTestFiles(dir, pattern) {
    const filesPaths = [];
    const dirents = fs.readdirSync(dir, { withFileTypes: true });

    for (const dirent of dirents) {
        const direntPath = path.resolve(dir, dirent.name);
        if (dirent.isFile() && direntPath.match(pattern)) {
            filesPaths.push(direntPath);
        }
    }

    return filesPaths;
}

const testPattern = /.*\.test\.js$/;

const startDir = path.resolve(__dirname, ...['lib', 'rules', 'tests']);

findTestFiles(startDir, testPattern).forEach((file) => {
    console.log(`Running test: ${file}`);
    require(file);
});
