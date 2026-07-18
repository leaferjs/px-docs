// #Shape Editor [Star 元素]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        StarEditTool: {
            // cornerRadiusRadding: 15, // 圆角控制点离图形顶部的默认边距
            // point: {}, // 基础控制点样式
            // cornersPoint: {}, // 角数控制点样式
            // cornerRadiusPoint: {}, // 圆角控制点样式
            // innerPoint: {} // 内径控制点样式
        }
    }
})

const rect = new Star({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'StarEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(rect)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(rect)
}, 600)
