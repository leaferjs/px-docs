// #渐变编辑 [在多个 fill、stroke 中指定需要编辑的渐变对象]
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
    strokeWidth: 10,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 
    fill: {
        type: 'radial',
        stops: ['#FF4B4B', '#FEB027', '#FF4B4B'],

    },
    stroke: {
        type: 'linear',
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B'],
        editing: true, // 指定stroke为需要编辑渐变的对象 // [!code hl]
    },
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)
