// #Points Editor [Line 曲线]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入视口插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            showAddPoint: true // 显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const line = new Line({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    curve: 0.4,
    strokeWidth: 5,
    stroke: "#32cd79",
    editable: true
})

app.tree.add(line)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(line)
}, 600)
