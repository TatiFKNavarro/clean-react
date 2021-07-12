const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  devServer: {
    contentBase: './public',
    // por padrão, o webpack gera o arquivo em memória, ao colocar para gerar em disco, evita alguns erros.
    writeToDisk: true,
    // evita que o webpack só entenda a raiz do projeto, podendo acessar as rotas diretamente
    historyApiFallback: true
  },
  // deixar o react fora do bundle
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    // limpar cache do webpack
    new CleanWebpackPlugin()
  ]
}
