// #Shape Editor [Rect 元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        RectEditTool: {
            // padding: 15 // 控制点离编辑框的边距
            // point: {} // 基础控制点样式
            // topLeftPoint: {}, // 左上角控制点样式
            // topRightPoint: {}, // 右上角控制点样式
            // bottomRightPoint: {}, // 右下角控制点样式
            // bottomLeftPoint: {}, // 左下角控制点样式
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'RectEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(rect)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(rect)
}, 600)
