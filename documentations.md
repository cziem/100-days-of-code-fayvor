# Documentations

## Errors and Their solutions

### Day9, August 9, 2018

Today I solved the `webpack.config.js` error that prevented my portfolio app from running since **Day1**

Here is the error `webpack.config.js` file:

```js
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/components/index.js"],
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugin: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/scripts/"
  },
  devtool: "source-map"
};
```

Because of this file I ran into this error at my console:

![console error](./assets/images/babel-loader-error.png)

==This is how I solved it==

I changed the `plugin` to `plugins` and it worked.

```js
...
options: {
  presets: ["env"],
  plugins: ['transform-object-rest-spread']
}
```