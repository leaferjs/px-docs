// #Tiler [围绕元素编辑框中心旋转]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件  // [!code hl]

const app = new App({
    view: window, editor: {
        TileEditor: { // 配置平铺编辑器
            aroundInnerEditBox: true // 图片是否围绕元素编辑框中心旋转，默认为false   // [!code hl]
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

// setTimeout(() => app.editor.config.TileEditor.aroundInnerEditBox = false, 10000)
