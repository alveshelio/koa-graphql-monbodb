module.exports = {
  presets: [
    [
      "@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    'transform-async-to-module-method'
  ]
};
