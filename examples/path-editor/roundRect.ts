// #Path Editor [编辑圆角Rect元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl:2]
import '@leafer-in/corner' // 导入圆角插件

const app = new App({
    view: window, editor: {
        PathEditor: {
            dataType: 'node', // 必须为 node 模式才能添加独立节点圆角 // [!code hl]
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 150,
    width: 60,
    height: 60,
    cornerRadius: [10, 20],
    stroke: 'black',
    fill: '#32cd79',
    scale: 5,
    editable: true
})

app.tree.add(rect)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)