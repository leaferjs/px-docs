// #Points Editor [编辑带 path 属性的元素]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            pathEditable: true, // 启用编辑带 path 属性的元素  // [!code hl]
            showAddPoint: true // 显示添加点（
        }
    }
})

const path = new Path({
    x: 100,
    y: 100,
    path: 'M30 270C8.96 120.52 8.96 40.52 30 30 58.44 15.78 90 210 150 210 210 210 241.56 15.78 270 30 291.04 40.52 291.04 120.52 270 270',
    strokeWidth: 5,
    stroke: "#32cd79",
    // editOuter: 'PointsEditTool', // 带 path 属性的元素默认为 PointsEditTool ，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(path)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(path)
}, 600)
