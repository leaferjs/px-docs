// #Clipper [快速修改裁剪控制点颜色]
import { App, Rect, Platform } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

Platform.image.crossOrigin = null

import '@pxgrow/clipper' // 导入图片裁剪插件 

const app = new App({
    view: window, tree: { type: 'design', pixelSnap: true, }, editor: {

        editSize: 'size',
        lockRatio: 'corner',
        // hideOnMove: true,
        stroke: '#4D7CFF',
        point: {
            width: 10,
            height: 10,
            editConfig: { editSize: 'font-size' },
            cornerRadius: 5,
            fill: '#fff',
            stroke: {
                type: 'solid',
                color: '#AAABAC',
            },
            strokeWidth: 0.5,
        },
        middlePoint: {
            width: 16,
            height: 8,
            cornerRadius: 5,
            fill: '#fff',
            stroke: {
                type: 'solid',
                color: '#AAABAC',
            },
            strokeWidth: 0.5,
        },
        rotateGap: 45,
        skewable: false,
        circle: {
            width: 22,
            height: 22,
            strokeWidth: 0,
            fill: "#fff",
        },
        ClipEditor: { // 配置裁剪编辑器
            pointColor: '#0d99ff', // 裁剪控制点颜色 
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
        url: '/test2.svg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    // app.editor.openInnerEditor(rect, true)
})