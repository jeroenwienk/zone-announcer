const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = 8080;
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  stats: {
    colors: true
  },
  contentBase: path.join(__dirname, 'dist'),
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Starting server on http://localhost:${PORT}`);
});


