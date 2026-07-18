// #Clipper [在多个 fill、stroke 中指定需要裁剪的图片填充对象]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    strokeWidth: 10,
    fill: {
        type: 'image',
        url: '/image/arrows.png',
        mode: 'stretch',
    },
    stroke: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
        editing: true // 指定stroke为需要裁剪的图片填充对象 // [!code hl]
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})
