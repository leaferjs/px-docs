// #Tiler [在多个 fill、stroke 中指定需要平铺的图片填充对象]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 500,
    editable: true,
    editInner: 'TileEditor', // 指定内部编辑器
    strokeWidth: 10,
    fill: {
        type: 'image',
        url: '/image/arrows.png',
        mode: 'repeat',
    },
    stroke: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        gap: 10,
        scale: 0.6,
        editing: true // 指定stroke为需要平铺的图片填充对象 // [!code hl]
    }
})

app.tree.add(rect)

// 模拟双击元素打开平铺编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})
