const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const templatePath = process.env.NODE_ENV === 'production' ? path.join('src', 'views', 'pages', 'templateP.ejs') : path.join('src', 'views', 'pages', 'template.ejs')

const config = [{
  entry: {
    createBlog: [path.resolve('src', 'components', 'entrypoints', 'create-blog.jsx')],
    blogId: [path.resolve('src', 'components', 'entrypoints', 'blog-id.jsx')],
    blogEdit: [path.resolve('src', 'components', 'entrypoints', 'blog-edit.jsx')],
    index: [path.resolve('src', 'components', 'entrypoints', 'index.jsx')],
    login: [path.resolve('src', 'components', 'entrypoints', 'login.jsx')],
    signUp: [path.resolve('src', 'components', 'entrypoints', 'sign-up.jsx')],
    userProfile: [path.resolve('src', 'components', 'entrypoints', 'user-profile.jsx')],
    searchPage: [path.resolve('src', 'components', 'entrypoints', 'search-page.jsx')],
    indexBlog: [path.resolve('src', 'components', 'entrypoints', 'index-blog.jsx')],
    errorPage: [path.resolve('src', 'components', 'entrypoints', 'error')]
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
      template: path.resolve('src', 'views', 'pages', 'create-blog.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['blogId'],
      filename: '../../views/pages/blog-id.ejs',
      template: path.resolve('src', 'views', 'pages', 'blog-id.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['blogEdit'],
      filename: '../../views/pages/blog-edit.ejs',
      template: path.resolve('src', 'views', 'pages', 'blog-edit.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: '../../views/pages/index.ejs',
      template: path.resolve('src', 'views', 'pages', 'index.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['login'],
      filename: '../../views/pages/login.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['signUp'],
      filename: '../../views/pages/signup.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['userProfile'],
      filename: '../../views/pages/user-profile.ejs',
      template: templatePath
    }),
    new HtmlWebpackPlugin({
      chunks: ['indexBlog'],
      filename: '../../views/pages/index-blog.ejs',
      template: path.resolve('src', 'views', 'pages', 'index-blog.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['searchPage'],
      filename: '../../views/pages/search-page.ejs',
      template: path.resolve('src', 'views', 'pages', 'search-page.ejs')
    }),
    new HtmlWebpackPlugin({
      chunks: ['errorPage'],
      filename: '../../views/pages/error.ejs',
      template: path.resolve('src', 'views', 'pages', 'error.ejs')
    })
  ]
}]

module.exports = config
