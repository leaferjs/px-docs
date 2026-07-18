// #渐变编辑 [配置色块样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/animate' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        GradientEditor: {
            colorBox: { // 配置色块样式 // [!code hl:4]
                cornerRadius: 0,
                selectedStyle: { y: -4, scaleX: 1.15, scaleY: 1.15, stroke: '#0d99ff' } // 选中样式
            },
            colorArrow: { // 配置色块箭头样式
                selectedStyle: { fill: '#0d99ff' } // 选中样式
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器
    fill: {
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)
