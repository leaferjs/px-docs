// #Points Editor [Line 曲线]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入视口插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, fill: '#F2F2F2', editor: {
        PointsEditTool: { // 编辑工具配置
            // pathEditable: false // 是否可编辑带path属性的元素， 默认为 false
            // showAddPoint: false 
            // point: {} // 控制点样式
            // beginPoint: {} // 起始控制点样式
            showAddPoint: 'all', // 是否显示添加点, 默认为 false, 设为 'two' 或 true 时只显示 附近的两个添加点
            // addPoint: { opacity: 1, fill: '#836DFF', stroke: 'white' }, // 定义添加点样式
        }
    }
})

const line = new Line({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    curve: 0.4,
    strokeWidth: 5,
    stroke: "#000",
    editable: true
})

app.tree.add(line)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(line)
}, 600)
