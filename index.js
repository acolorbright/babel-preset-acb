'use strict';
var browsers = require('@acolorbright/browserslist-config');

var assign = require('object.assign');

var modules = [require('@babel/plugin-transform-modules-commonjs'), {
  strict: false
}];

var defaultTargets = {
  "node": "current",
  "browsers": browsers
};

function buildTargets(options) {
  return assign({}, defaultTargets, options.additionalTargets);
}

module.exports = function buildACBPreset(context, options) {
  var transpileTargets = (options && options.targets) ||
    buildTargets(options || {});

  var debug = (options && typeof options.debug === 'boolean') ? !!options.debug : false;

  return {
    presets: [
      require('@babel/preset-env').default(context, {
        debug: debug,
        useBuiltIns: "entry",
        modules: false,
        targets: transpileTargets
      }),
      require('@babel/preset-react'),
      require('@babel/preset-stage-2'),
    ],
    plugins: [
      options && options.modules === false ? null : modules,
      require('@babel/plugin-proposal-object-rest-spread'),
      require('babel-plugin-jsx-control-statements'),
      [require('babel-plugin-transform-builtin-extend').default, {
        globals: ['Error']
      }],
      debug ? null : require('@babel/plugin-transform-react-constant-elements'),
      debug ? null : require('@babel/plugin-transform-react-inline-elements').default,
    ].filter(Boolean)
  };
};
