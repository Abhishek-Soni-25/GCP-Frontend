const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7000',  // Your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
