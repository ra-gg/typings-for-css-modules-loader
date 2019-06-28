import { resolve } from 'path'
const loaderPath = resolve('src/index.js')

module.exports = {
  entry: './test/entry.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['babel-loader', { loader: 'ts-loader', options: { transpileOnly: true } } ] },
      { test: /example\.css$/, loader: loaderPath, options: { modules: true } },
      { test: /example-camelcase\.css$/, loader: loaderPath, options: { modules: true, camelCase: true } },
      { test: /example-namedexport\.css$/, loader: loaderPath, options: { modules: true, namedExport: true } },
      { test: /example-camelcase-namedexport\.css$/, loader: loaderPath, options: { modules: true, camelCase: true, namedExport: true } },
      { test: /example-no-css-modules\.css$/, loader: loaderPath },
      { test: /example-compose\.css$/, loader: loaderPath, options: { modules: true, camelCase: true, namedExport: true } }
    ]
  }
};
