const Generator = require('yeoman-generator');

const fs = require('fs');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    }

    async initPackage() {
        let answers = await this.prompt([
            {
                type: "input",
                name: "name",
                massage: "Your project name",
                default: this.appname,
            }
        ])

        const pkgJson = {
            "name": answers.name,
            "version": "1.0.0",
            "license": "MIT",
            "scripts": {
                "start": "craco start",
                "build": "craco build",
                "eject": "react-scripts eject"
            },
            "dependencies": {
                "antd": "^4.15.1",
                "query-string": "^7.0.0",
                "react": "^17.0.2",
                "react-dom": "^17.0.2",
                "react-router-dom": "^5.2.0",
                "react-scripts": "^4.0.3"
            },
            "devDependencies": {
                "@ant-design/icons": "^4.6.2",
                "@craco/craco": "^6.1.1",
                "craco-antd": "^1.19.0",
                "web-vitals": "^1.1.1"
            },
            "browserslist": {
                "production": [
                    ">0.2%",
                    "not dead",
                    "not op_mini all"
                ],
                "development": [
                    "last 1 chrome version",
                    "last 1 firefox version",
                    "last 1 safari version"
                ]
            }
        };

        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

        fs.readdir(this.sourceRoot(), (err, items) => {
            console.log(items);
            for (let item of items) {
                this.fs.copyTpl(
                    this.templatePath(item),
                    this.destinationPath(item),
                    {}
                );
            }
        })

        this.npmInstall();

    }
};