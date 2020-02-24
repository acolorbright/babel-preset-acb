const { declare } = require('@babel/helper-plugin-utils');

const browsers = require('@acolorbright/browserslist-config');


const defaultTargets = {
  node: 'current',
  browsers,
};

function buildTargets({ additionalTargets }) {
  return { ...defaultTargets, ...additionalTargets };
}

module.exports = declare((api, options) => {
  api.assertVersion('^7.8');

  const {
    modules = api.env('test') ? 'commonjs' : 'auto',
    targets = buildTargets(options),
  } = options;

  const debug = typeof options.debug === 'boolean' ? options.debug : false;
  const development = typeof options.development === 'boolean'
    ? options.development
    : api.cache.using(() => process.env.NODE_ENV === 'development');

  const config = {
    presets: [
      [require('@babel/preset-env'), {
        debug,
        modules,
        targets,
      }],
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('babel-plugin-jsx-control-statements'),
    ],
  };

  if (!development) {
    config.plugins.push(require('babel-plugin-transform-react-remove-prop-types'));
  }
  return config;
});
