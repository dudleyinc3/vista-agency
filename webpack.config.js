

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: "./app/post_styles/scripts",
    filename: "App.js"
  },
  module: {
  	loaders: [
  	{
  		loader: 'babel',
  		query: {
  			presets: ['es2015']
  		},
  		test: /\.js$/,
  		exclude: /node_modules/
  	}
  	]
  }
}