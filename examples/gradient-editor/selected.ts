// #渐变编辑 [默认选中一个色标]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 
    fill: {
        type: 'linear',
        stops: [
            '#FF4B4B',
            '#FEB027',
            { offset: 0.66, color: '#79CB4D', selected: true }, // 默认选中绿色 // [!code hl]
            '#FF4B4B'
        ]
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)
