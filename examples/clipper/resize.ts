// #Clipper [resize 裁剪框]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
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

        setTimeout(() => {

            const clipEditor = app.editor.getInnerEditor('ClipEditor')

            // 围绕裁剪框的中心点缩放（resize) // [!code hl:2]
            clipEditor.clipTransformTool.scaleOf('center', 1, 0.5) // 增量缩放操作
            clipEditor.updateImagePaint()


        }, 2000)

    }, 600)
})
