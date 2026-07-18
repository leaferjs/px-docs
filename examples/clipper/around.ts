// #Clipper [围绕裁剪框中心旋转]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件  // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 配置裁剪编辑器
            aroundClipBox: true // 图片是否围绕裁剪框中心旋转，默认为false   // [!code hl]
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

// setTimeout(() => app.editor.config.ClipEditor.aroundClipBox = false, 10000)
