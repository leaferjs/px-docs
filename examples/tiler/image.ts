// #Tiler [平铺 Image 元素]
import { App, Image } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Image({
    x: 100,
    y: 100,
    width: 500,
    editable: true,
    editInner: 'TileEditor', // 指定内部编辑器 // [!code hl]
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        gap: 10,
        scale: 0.6
    }
})

app.tree.add(rect)

// 模拟双击元素打开平铺编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})