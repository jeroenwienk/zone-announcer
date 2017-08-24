const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard({ minimal: true });

const PORT = 8080;
config.entry.unshift(`webpack-dev-server/client?http://localhost:${PORT}/`, 'webpack/hot/dev-server');
// config.plugins.push(new DashboardPlugin(dashboard.setData));

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  quiet: false,
  stats: {
    colors: true
  },
  contentBase: config.output.path
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Starting server on http://localhost:${PORT}`);
});
