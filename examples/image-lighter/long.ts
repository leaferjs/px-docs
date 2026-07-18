// #Image Lighter [大长图流畅操作]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {}) // 图片加速

const rect = new Rect({
    fill: {
        type: 'image',
        url: '/image/long-large.png', // 原图为 2000 * 50000px 的大长图
        mode: 'stretch',
        showProgress: 'gray',
    },
    pixelRatio: devicePixelRatio,
    placeholderColor: 'white',
    editable: true
})

app.tree.add(rect)

// app.waitViewCompleted(() => {
//     app.tree.move(0, -100)
// })