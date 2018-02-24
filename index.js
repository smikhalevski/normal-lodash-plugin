const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

class NormalLodashPlugin extends webpack.NormalModuleReplacementPlugin {

  constructor(options = {}) {
    const {basePath = path.dirname(module.parent.filename)} = options;
    const lodashDir = path.join(basePath, 'node_modules', 'lodash');

    if (!fs.existsSync(lodashDir)) {
      throw new Error('Expected lodash to be installed');
    }

    const fileNames = fs.readdirSync(lodashDir);
    const replacer = resource => {
      const [, lodashFuncName] = resource.request.match(NormalLodashPlugin.resourceRegExp);
      if (!lodashFuncName) {
        resource.request = lodashDir;
      }
      for (const fileName of fileNames) {
        if (fileName.toLowerCase() === lodashFuncName + '.js') {
          resource.request = path.join(lodashDir, fileName);
          break;
        }
      }
    };
    super(NormalLodashPlugin.resourceRegExp, replacer);
  }
}

NormalLodashPlugin.resourceRegExp = /^lodash(?:[./\\]((?:fp[/\\])?\w+)(?:[/\\]index)?(?:\.js)?)?$/i;

module.exports = NormalLodashPlugin;
