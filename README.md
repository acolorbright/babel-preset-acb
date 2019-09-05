# babel-preset-acb

> A babel preset for transforming JavaScript for A Color Bright, modeled on Airbnb's [babel-preset-airbnb](https://github.com/airbnb/babel-preset-airbnb).

Currently uses presets for React and stage 2, plus object rest/spread, optional
chaining and JSX control statements.

## Installation

```shell
$ npm install acolorbright/babel-preset-acb#v2.1.1
```

## Usage

Add `"presets": ["acb"]` to your `.babelrc` file.

### Targeting Environments

This module uses babel-preset-env to target specific environments.

Please refer to [babel-preset-env#targets](https://github.com/babel/babel-preset-env#targets) for a list of available options.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

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
