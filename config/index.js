// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    htmlRoot: 'D://MyProject/PA/views',//页面的产出目录
    // assetsSubDirectory: 'www.baidu.com',//assetsSubDirectory和assetsPublicPath决定了生成的静态文件的相对路径
    // assetsPublicPath: 'http://',
    assetsSubDirectory:'',
    assetsPublicPath:'/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8282,
    assetsSubDirectory: 'static',//静态文件生成路径为/static/js/***
    assetsPublicPath: '/',
    proxyTable: {
        '/discount':{
            target:'http://172.17.2.148:8082/',
            changeOrigin:true,
            pathRewrite:{
                '^/discount':'/discount'//如果是接口多出来的一层目录，则设为空字符串，如：/liuyong/discount/getIndex
            }
        },
        '/user':{
            target:'http://172.17.2.148:8082/',
            changeOrigin:true,
            pathRewrite:{
                '^/user':'/user'
            }
        },
        '/avtm':{
            target:'http://172.17.2.148:8082/',
            changeOrigin:true,
            pathRewrite:{
                '^/avtm':'/avtm'
            }
        },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
