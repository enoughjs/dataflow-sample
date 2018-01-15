'use strict';

module.exports = {
  "extends": [
    "standard",
    "plugin:vue-libs/recommended"
  ],
  "plugins": [
    "mocha"
  ],
  "rules": {
    "no-labels": 0,
    "no-empty-label": 0,
    "semi": [2, "always"],
    "space-before-function-paren": 0,
    "no-new": 0
  },
  "env": {
    "es6": true,
    "browser": true,
    "mocha": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
};
