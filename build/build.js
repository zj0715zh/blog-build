// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'
var childProcess = require('child_process')
var path = require('path')
var config = require('../config')
var ora = require('ora')
var fs = require('fs')
var cmd=require('node-cmd')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
var modulePath = path.join(config.build.assetsRoot, 'module')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
  var fileLength = fs.readdirSync(modulePath)
  for(i=0;i<fileLength.length;i++){
    var fileName = fileLength[i].split('.').shift();
    var rs = fs.createReadStream(modulePath+'/'+fileName+'.html')
    var ws = fs.createWriteStream(modulePath+'/'+fileName+'.ejs')
    rs.pipe(ws);
  }
  for(i=0;i<fileLength.length;i++){
    var fileName = fileLength[i].split('.').pop();
    if(fileName=='html'){
      fs.unlinkSync(modulePath+'/'+fileLength[i])
    }
  }
  cmd.get('cp -r '+modulePath+'/*.ejs '+config.build.htmlRoot,function(err, data, stderr){
    if(err){
      console.log(err)
      return;
    }
    console.log('文件本地部署完成')
    rm('-rf', modulePath)
    rm('-rf', 'D:/MyProject/PA/static/*')
    cmd.get('xCopy '+config.build.assetsRoot+' D:\\MyProject\\PA\\static /s /e /y',function(err, data, stderr){
      if(err){
        console.log(err)
        return;
      }
      console.log('静态文件拷贝完成')
    })
  })
//   childProcess.execFile('D://vue-multipage/config/test.bat',{cwd:'D://'},function(e, stdout, stderr) {
//       if(e){
//         console.log(e);
//         return;
//       }
// 　　　console.log(stdout);
// 　　　console.log(stderr);
//   });
  // cmd.run('cp -r ./dist/module/* ../copyTest/')
})
