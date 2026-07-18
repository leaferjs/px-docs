// #Clipper [手势控制图片]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window,
    mobile: true, // 支持手机端体验优化
    editor: {
        moveable: 'gesture', // 手势控制图片
        resizeable: 'gesture',
        rotateable: 'gesture',
        ClipEditor: { // 配置裁剪编辑器
            clipEditBox: { // [!code hl:5]
                moveable: true, // 裁剪框不进行手势控制，防止与手势操作图片冲突
                resizeable: true,
                rotateable: true,
            }
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
