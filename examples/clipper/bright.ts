// #Clipper [突出显示并置顶渲染裁剪元素，淡化其他元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/bright' // 导入突出显示元素插件 // [!code hl:2]
import '@pxgrow/clipper' // 导入图片裁剪插件 

const app = new App({
    view: window, ground: {}, editor: {
        ClipEditor: {
            editBox: {
                bright: true, // 突出显示并置顶渲染裁剪元素 // [!code hl:2]
                dimOthers: true, // 淡化其他元素
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

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 350))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 220, 350))

// // 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})
