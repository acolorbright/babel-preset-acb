/* eslint-disable global-require */
const browsers = require('@acolorbright/browserslist-config');

const assign = require('object.assign');

const modules = [require('@babel/plugin-transform-modules-commonjs'), {
  strict: false,
}];


const defaultTargets = {
  node: 'current',
  browsers,
};

function buildTargets(options) {
  return assign({}, defaultTargets, options.additionalTargets);
}

module.exports = function buildACBPreset(context, options) {
  const transpileTargets = (options && options.targets)
    || buildTargets(options || {});

  const debug = (options && typeof options.debug === 'boolean') ? !!options.debug : false;

  const presetEnvExtraOptions = options.presetEnvExtraOptions || {};
  const presetEnvOptions = { debug,
    useBuiltIns: 'entry',
    modules: false,
    targets: transpileTargets,
    ...presetEnvExtraOptions };

  return {
    presets: [
      require('@babel/preset-env').default(context, presetEnvOptions),
      require('@babel/preset-react'),
    ],
    plugins: [
      options && options.modules === false ? null : modules,
      require('@babel/plugin-proposal-object-rest-spread'),
      require('@babel/plugin-proposal-optional-chaining'),
      require('babel-plugin-jsx-control-statements'),
      [require('babel-plugin-transform-builtin-extend').default, {
        globals: ['Error'],
      }],
      require('@babel/plugin-proposal-export-namespace-from'),
      require('@babel/plugin-proposal-throw-expressions'),
      require('@babel/plugin-syntax-dynamic-import'),
      debug ? null : require('@babel/plugin-transform-react-constant-elements'),
      debug ? null : require('@babel/plugin-transform-react-inline-elements').default,
    ].filter(Boolean),
  };
};
