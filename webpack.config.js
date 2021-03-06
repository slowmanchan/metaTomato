process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions'],
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      "/auth": { target: 'http://localhost:3000', secure: false},
      "/api": { target: 'http://localhost:3000', secure: false}
    }
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
};
