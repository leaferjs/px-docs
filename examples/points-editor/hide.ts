// #Points Editor [隐藏编辑框]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置  // [!code hl:6]
            editBox: {
                editBox: false, // 隐藏编辑框
                moveable: false // 是否能移动编辑框
            }
        }
    }
})

const line = new Line({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    strokeWidth: 5,
    strokeJoin: 'round',
    stroke: "#32cd79",
    editable: true
})

app.tree.add(line)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(line)
}, 600)
