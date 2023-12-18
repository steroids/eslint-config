const path = require('path');

module.exports = {
    create(context) {
        const filename = path.relative(context.getCwd(), context.getFilename());
        const fileExtensions = ['jsx', 'tsx'];
        const folderName = context.getFilename().split('/').slice(-2, -1)[0];

        if (!fileExtensions.includes(filename.split('.').pop())) {
            return {};
        }

        return {
            FunctionDeclaration: (node) => {
                if (folderName !== filename.split('.').shift()) {
                    context.report({
                        node,
                        message: "Name of file component must be the same name as it's folder",
                    });
                }
            },
        };
    },
};
