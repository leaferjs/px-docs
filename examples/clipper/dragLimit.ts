// #Clipper [图片只能在有效范围内拖动、裁剪（暂不支持同时旋转、倾斜图片，限制效果会有误差，后续会支持）]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        dragLimitAnimate: true,
        rotateable: false, // 关闭图片旋转、倾斜功能
        skewable: false,
        ClipEditor: { // 配置裁剪编辑器
            dragLimit: true // 图片在裁剪框的有限范围内拖动，默认为false  // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})
