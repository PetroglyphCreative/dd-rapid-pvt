const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
	  main: './src/index.js',
	  styles:'./src/assets/css/style.css'
	  
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
	    {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
       },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', 
	            options: { 
		        importLoaders: 1,
                outputPath: 'assets/css/' 
                } 
              },
            'postcss-loader',
          ],
        }),
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }]
       }
     ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
	    filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
	    filename: 'homepage.html',
      template: 'src/homepage.html'
    }),
    new HtmlWebpackPlugin({
	    filename: 'design-elements.html',
      template: 'src/design-elements.html'
    }),
  ],
  output: {
	  filename:'[name].js',
    path: path.resolve(__dirname, 'public')
    //path: path.resolve(__dirname, '../deploy/nwdp/public/assets/webpack') // <-local for Craft on NW's system
    //path: path.resolve(__dirname, '../deploy/public/assets/webpack') // <- local for Craft on Caroline's system
  },
  devServer: {
	  watchContentBase: true,
    contentBase: path.join(__dirname, 'public') // Get it to serve from somewhere other than right here.
  }
}
