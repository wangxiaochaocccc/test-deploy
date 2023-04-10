const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/test-deploy/dist',
  transpileDependencies: true
})
