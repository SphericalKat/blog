const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = [{
  entry: {
    createBlog: [path.resolve('src', 'components', 'entrypoints', 'create-blog.jsx')],
    createThread: [path.resolve('src', 'components', 'entrypoints', 'create-thread.jsx')],
    index: [path.resolve('src', 'components', 'entrypoints', 'index.jsx')],
    indexForum: [path.resolve('src', 'components', 'entrypoints', 'index-forum.jsx')],
    login: [path.resolve('src', 'components', 'entrypoints', 'login.jsx')],
    signUp: [path.resolve('src', 'components', 'entrypoints', 'sign-up.jsx')],
    userProfile: [path.resolve('src', 'components', 'entrypoints', 'user-profile.jsx')],
    searchPage: [path.resolve('src', 'components', 'entrypoints', 'search-page.jsx')]

  },

  output: {
    path: path.resolve(__dirname, 'src', 'static', 'public', 'js'),
    filename: '[chunkhash].js',
    publicPath: '/js'
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
      }, {
        test: /\.ejs$/,
        loader: 'raw-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
  },

  optimization: {
    splitChunks: {
      automaticNameDelimiter: '.',
      cacheGroups: {
        react: {
          chunks: 'initial'
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    // create blog
    new HtmlWebpackPlugin({
      chunks: ['createBlog'],
      filename: '../../views/pages/create-blog.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['createThread'],
      filename: '../../views/pages/create-thread.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: '../../views/pages/index.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['indexForum'],
      filename: '../../views/pages/index-forum.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['login'],
      filename: '../../views/pages/login.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['signUP'],
      filename: '../../views/pages/signup.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['userProfile'],
      filename: '../../views/pages/user-profile.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['indexBlog'],
      filename: '../../views/pages/indexBlog.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['searchPage'],
      filename: '../../views/pages/searchPage.ejs',
      template: path.join('src', 'views', 'pages', 'template.ejs')
    })
  ]
}]

module.exports = config
