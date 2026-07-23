// #Shape Editor [Ellipse 元素]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/shape-editor'  // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        EllipseEditTool: { // 编辑工具配置
            // 快捷键：按住 Ctrl / Command 键拖拽角度控制点，会固定夹角旋转

            // angleSnapGap: 5, // 角度吸附间隔，按住Shift拖拽角度控制点时生效
            // point: {}, // 基础控制点样式
            // startPoint: { stroke: 'red' }, // 起点样式
            // endPoint: {}, // 结束点样式
            // innerPoint: {} // 内径控制点样式
            //  pointAlign: 'center' // 起点和结束点对齐圆环的方式，默认为 outer
        }
    }
})

const ellipse = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'EllipseEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse)
}, 600)
