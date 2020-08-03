module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "airbnb"],
  "rules": {
      "indent": ["error", 4],
      "react/jsx-indent-props": ["error",4],
      "react/jsx-indent": ["error",4],
      "react/jsx-curly-spacing": ["warn", {
        "when": "always",
        "spacing": { "objectLiterals": "never" }
      }],
      "comma-dangle": ["error", "never"],
      "arrow-parens": ["error", "as-needed"],
      "jsx-quotes": ["error", "prefer-single"],
      "linebreak-style": "off",
      "react/state-in-constructor": ["off"],
      "class-methods-use-this":"off",
      "react/static-property-placement":["off"],
      "react/jsx-props-no-spreading":["off"],
      "default-case":["off"],
      "no-case-declarations":["off"]
  },
};