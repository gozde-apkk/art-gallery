

module.exports = {
    // other webpack configurations...
  
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader', // <- make sure this is correctly configured
          ],
        },
      ],
    },
    
  resolve: {
    fallback: {
      "assert": require.resolve("assert/")
    }
  }
  };
  