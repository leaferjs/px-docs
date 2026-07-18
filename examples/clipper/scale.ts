// #Clipper [缩放背景]
import { App, Rect, AroundHelper } from 'leafer-ui'
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

            // 围绕裁剪框的中心点缩放  // [!code hl:7]
            const { imageTarget, editTarget } = clipEditor
            const center = imageTarget.getBoxPoint(editTarget.getWorldPointByBox(AroundHelper.getPoint('center', editTarget.boxBounds)))
            clipEditor.imageTransformTool.scaleOf(center, 1.5) // 增量缩放操作

            // 围绕背景图片的中心点缩放
            // app.editor.getInnerEditor('ClipEditor').imageTransformTool.scaleOf('center', 1.5) // 增量缩放操作


        }, 2000)

    }, 600)
})
