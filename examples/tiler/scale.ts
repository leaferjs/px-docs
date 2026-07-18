// #Tiler [缩放图片]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

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

        setTimeout(() => {

            const tileEditor = app.editor.getInnerEditor('TileEditor')

            // 围绕图片的左上角缩放  // [!code hl:2]
            tileEditor.imageTransformTool.scaleOf('top-left', 1.5) // 增量缩放操作

            // 围绕元素的中心点缩放 
            // const { imageTarget, editTarget } = tileEditor
            // const center = imageTarget.getBoxPoint(editTarget.getWorldPointByBox(AroundHelper.getPoint('center', editTarget.boxBounds)))
            // tileEditor.innerTransformTool.scaleOf(center, 1.5) // 增量缩放操作


        }, 2000)

    }, 600)
})
