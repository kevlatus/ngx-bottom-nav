const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const ROOT_PATH = path.resolve(__dirname);
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const PROJECTS_PATH = path.resolve(ROOT_PATH, 'projects');

const COMPANION_APP_NAME = require(path.resolve(ROOT_PATH, 'package.json')).name;
const LIB_PROJECT_NAME = COMPANION_APP_NAME.replace('-app', '');
const LIB_PUBLIC_NAME = 'ngx-' + LIB_PROJECT_NAME;
const LIB_SOURCE_FOLDER = path.resolve(PROJECTS_PATH, LIB_PROJECT_NAME);
const LIB_DIST_FOLDER = path.resolve(DIST_PATH, LIB_PROJECT_NAME);
const LIB_VERSION = require(path.resolve(LIB_SOURCE_FOLDER, 'package.json')).version;

const LIB_PACKAGE_NAME = `${LIB_PUBLIC_NAME}-${LIB_VERSION}.tgz`;
const LICENSE_PATH = path.resolve(ROOT_PATH, 'LICENSE');
const README_PATH = path.resolve(ROOT_PATH, 'README.md');

fs.copyFileSync(LICENSE_PATH, path.resolve(LIB_DIST_FOLDER, 'LICENSE'));
fs.copyFileSync(README_PATH, path.resolve(LIB_DIST_FOLDER, 'README.md'));

exec(
  `npm pack`,
  {cwd: LIB_DIST_FOLDER},
  function (err, stdout) {
    if (err) throw err;
    else {
      console.log(stdout);

      exec(
        `npm publish ${LIB_PACKAGE_NAME}`,
        {cwd: LIB_DIST_FOLDER},
        function (err, stdout) {
          if (err) throw err;
          else console.log(stdout);
        });
    }
  });
