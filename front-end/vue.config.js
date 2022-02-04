
// Vue3 관련 설정 파일
module.exports = {
  devServer: {
    https: false,
    port: 8083,
    open: true,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:8080/'
        // target: 'http://i6b104.p.ssafy.io:8080/'
      }
    },
    historyApiFallback: true,
    hot: true
  },
  css: {
    requireModuleExtension: false // import 시에 경로에 .module 포함 안해도 됨.
  },
  // transpileDependencies: [
  //   'element-plus'
  // ],
  lintOnSave: false,
  outputDir: '../back-end/Azit/src/main/resources/dist'
  // outputDir: '../backend/src/main/resources/dist'
}
