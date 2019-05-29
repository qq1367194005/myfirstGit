module.exports = {
    //...
    publicPath: './',
    //...
    devServer: {
        // 设置代理
        proxy: {
          "/api": {
            target: "http://shop.sirentoy.com", // 访问数据的计算机域名
            changOrigin: true //开启代理
          }
        }
      }
}