// #Tiler [手势控制图片]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件 // [!code hl]

const app = new App({
    view: window,
    mobile: true, // 支持手机端体验优化
    editor: {
        moveable: 'gesture', // 手势控制图片
        resizeable: 'gesture',
        rotateable: 'gesture',
        TileEditor: { // 配置平铺编辑器
            innerEditBox: { // [!code hl:5]
                moveable: true, // 元素编辑框不进行手势控制，防止与手势操作图片冲突
                resizeable: true,
                rotateable: true,
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 500,
    editable: true,
    editInner: 'TileEditor', // 指定内部编辑器
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
