// #Clipper [可移动的裁剪框]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: {
            clipEditBox: {
                moveable: true, // 裁剪框可移动 // [!code hl:2]
                resizeLine: { pointType: 'move' }, // 拖拽裁剪框的边缘可移动裁剪框， 将裁剪框的透明边缘控制线转为移动功能 
                //  moveCursor: 'grab', // 可自定义移动光标（参考编辑器的moveCursor配置）
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
