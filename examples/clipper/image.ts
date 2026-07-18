// #Clipper [裁剪 Image 元素]
import { App, Image } from 'leafer-ui'
import { InnerEditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Image({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器 // [!code hl]
    url: '/image/leafer.jpg'
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

// 裁剪Image完成后，json数据会保留fill字段，并移除url字段
app.editor.on(InnerEditorEvent.CLOSE, () => {
    console.log(rect.toJSON()) // [!code hl]
})