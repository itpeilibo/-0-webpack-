import app from '../src/app.vue'
import './style.css'
//引入Vue
//引入App
import './banner'
import './tabs'
import './styles/index.css'
import './styles/index.less'

// 1.引入图片
import gifSrc from './assets/assets/1.gif'
import pngSrc from './assets/assets/logo_small.png' 

// 2. 创建图片节点
const gif =document.createElement('img')
const png = document.createElement('img')

// 3. 给src赋值
gif.src = gifSrc
png.src = pngSrc

// 4. 插入节点
document.body.appendChild(gif)
document.body.appendChild(png)
import './assets/assets/fonts/iconfont.css'

const fn = () => console.log('你好呀！');
console.log(fn);