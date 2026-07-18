// #Points Editor [Polygon 元素]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            showAddPoint: true // 显示添加点
        }
    }
})

const polygon = new Polygon({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    strokeWidth: 5,
    strokeJoin: 'round',
    fill: "#32cd79",
    stroke: "#000",
    // editOuter: 'PointsEditTool', // 带 points 属性的元素默认为 PointsEditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(polygon)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(polygon)
}, 600)
