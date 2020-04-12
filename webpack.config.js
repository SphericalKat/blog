const path = require('path')

const config = [{
  entry: {
    index: ['./src/components/entrypoints/index.jsx'],
    home: ['./src/components/entrypoints/home.jsx'],
    signUp: ['./src/components/entrypoints/signUp.jsx'],
    create: ['./src/components/entrypoints/create.jsx'],
    blog: ['./src/components/entrypoints/blog.jsx'],
    createBlog: ['./src/components/entrypoints/createBlog.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'src', 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: [/node_modules/, /public/]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
  },
  // optimization: {
  //   splitChunks: {
  //     automaticNameDelimiter: '.',
  //     cacheGroups: {
  //       react: {
  //         chunks: 'initial'
  //       }
  //     }
  //   }
  // }
}]

module.exports = config
