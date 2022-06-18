const { VueLoaderPlugin } = require('vue-loader')
// 2.webpack配置
// - 根目录下新建
// - COMMONJS规范导出对象
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 3. 入口和出口
const { join } = require('path');
module.exports = {
  mode:'development',
  // 指定路径,相对路径
  entry: './src/main.js',
  // 指定出口
  output: {
    // 输出的目录，绝对路径，lib
    path: join(__dirname, 'lib'),
    // 输出的文件名 webpack-demo.js
    filename: 'webpack-demo.js',
    // 删除上次的文件夹再打包
    clean:true
  },
  plugins: [
    new HtmlWebpackPlugin({
  // 绝对路径
      template: join(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css/i,
        // 解析规则 从后往前
        use: ['style-loader', 'css-loader'],
        
      }, 
      {
        test: /\.less$/i,
        // 解析规则 从后往前
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(png|gif|jpeg)$/i,
        // 解析规则 从后往前
        // type:'asset/resource'
        // type:'asset/inline'
        // 8kb为界限 大于8打包成图片 小于8打包成base64
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 字节
            // :maxSize 21 * 1024
          }
        },
        generator: {
          filename:'images/[hash:6][ext]'
        }
      },
//       // 图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename:'fonts/[hash:6][ext]'
        }
      },
      {
        test: /\.js$/i,
        exclude: join(__dirname, 'node_modules'),
        use: [{
          loader: 'babel-loader',
       
        }]
      },
      {
        test: /\.vue$/i,
        use: ['vue-loader']
      }
    ]
  }
}