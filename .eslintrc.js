module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "env": {
      "browser": true
    },
    "rules": {
        "object-curly-newline": "off",
        "react/jsx-props-no-spreading": 0,
        "key-spacing": "off",
        "react/static-property-placement": 0,
        "react/destructuring-assignment": 0,
        "react/no-did-update-set-state": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0
    }
};
