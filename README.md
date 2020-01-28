# babel-preset-acb

> A babel preset for transforming JavaScript for A Color Bright, modeled on Airbnb's [babel-preset-airbnb](https://github.com/airbnb/babel-preset-airbnb).

Currently uses the presets [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) and [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react), plus plugins for [class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties), [JSX control statements](https://www.npmjs.com/package/babel-plugin-jsx-control-statements), and [remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) (the latter in production only).

## Requirements

* [@babel/core](https://babeljs.io/docs/en/babel-core) [7.8](https://babeljs.io/blog/2020/01/11/7.8.0)

## Installation

```shell
$ npm install --save-dev --save-exact @babel/core acolorbright/babel-preset-acb#v3.0.0
```

## Usage

Add `"presets": ["acb"]` to your `.babelrc` file.

### Targeting Environments

This module uses @babel/preset-env to target specific environments. Please refer to [babel-preset-env#targets](https://babeljs.io/docs/en/babel-preset-env#targets) for a complete list of target options.

For a list of available browsers please see [browserlist](https://github.com/browserslist/browserslist).

Our default browsers list is available via our [@acolorbright/browserslist-config](https://github.com/acolorbright/browserslist-config) package.

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["acb", {
    "targets": {
      "chrome": 50,
      "explorer": 11,
      "firefox": 45
    }
  }]]
}
```

The following transpiles only for Node v6.

```json
{
  "presets": [["acb", {
    "targets": {
      "node": 6
    }
  }]]
}
```

If you wish, you can also inherit our default list of browsers and extend them using `additionalTargets`.

```json
{
  "presets": [["acb", {
    "additionalTargets": {
      "chrome": 42,
      "explorer": 8
    }
  }]]
}
```

You may override our default debug option by providing your own `debug` key.

```json
{
  "presets": [["acb", {
    "debug": true
  }]]
}
```

You may also override our default developer option (which is based on `NODE_ENV`) by providing your own `developer` key.

```json
{
  "presets": [["acb", {
    "developer": true
  }]]
}
```
