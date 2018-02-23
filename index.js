'use strict';

var assign = require('object.assign');

var defaultTargets = {
  "node": "current",
  "browsers": [
    "last 2 chrome versions",
    "last 2 firefox versions",
    "last 2 safari versions",
    "last 2 edge versions",
    "last 1 ie versions",
    "last 2 ios_saf versions",
    "last 2 android versions",
    "last 2 samsung versions"
  ]
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
      require('babel-preset-env').default(null, {
        debug: debug,
        useBuiltIns: true,
        targets: transpileTargets
      }),
      require('babel-preset-react'),
      require('babel-preset-stage-2'),
    ],
    plugins: [
      require('babel-plugin-transform-object-rest-spread'),
      require('babel-plugin-jsx-control-statements'),
      [require('babel-plugin-transform-builtin-extend'), {
        globals: ['Error']
      }],
      require('transform-react-constant-elements'),
      require('transform-react-inline-elements')
    ].filter(Boolean)
  };
};
