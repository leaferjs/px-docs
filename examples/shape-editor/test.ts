// #Shape Editor [Ellipse 元素]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/path-editor'  // 导入形状编辑插件 // [!code hl]
import '@pxgrow/shape-editor'  // 导入形状编辑插件 // [!code hl]
import { EllipseEditTool } from '@pxgrow/shape-editor'

const app = new App({
    view: window, editor: {
        editBoxType: 'stroke',
        EllipseEditTool: { // 编辑工具配置
            // point: {} // 基础控制点样式
            // startPoint: { stroke: 'red' } // 起点样式
            // endPoint: {} // 结束点样式
            // innerPoint: {} // 内径控制点样式
        }
    }
})

EllipseEditTool.registerEditTool('LeaferEllipseEditTool', true)

// Object.defineProperty(EllipseEditTool.prototype, 'tag', {
//     get() {
//         return 'LeaferEllipseEditTool'
//     }
// })
console.log(new EllipseEditTool(this))

const ellipse = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    stroke: 'black',
    strokeWidth: 20,
    startAngle: 50,
    endAngle: 300,
    closed: false,
    strokeAlign: 'center',
    editable: true,
    editOuter: 'LeaferEllipseEditTool',
    editConfig: {
        LeaferEllipseEditTool: {
            innerPoint: { visible: true } // 隐藏内径控制点
        }
    }
})

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse)
}, 600)
