// #Path Editor [编辑Polygon元素]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const polygon = new Polygon({
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    editable: true,
    stroke: 'black',
    fill: '#32cd79',
    scale: 5
})

app.tree.add(polygon)

console.log(polygon.getPathString(true, true, 2)) // 导出SVG路径

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(polygon, true)
}, 600)