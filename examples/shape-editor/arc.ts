// #Shape Editor [Ellipse 弧线]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        editBoxType: 'stroke',
        EllipseEditTool: {
            innerPoint: { visible: false } // 隐藏内径控制点
        }
    }
})

const ellipse = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    innerRadius: 1,
    closed: false, // [!code hl]
    stroke: 'black',
    strokeAlign: 'center',
    strokeWidth: 20,
    // editOuter: 'EllipseEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置
    editable: true
})

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse)
}, 600)