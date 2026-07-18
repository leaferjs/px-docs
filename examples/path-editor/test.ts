// #Path Editor [编辑路径]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]
import { PathEditorEvent } from '@pxgrow/path-editor'

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true, // 是否显示添加点（位于选中节点的两侧线段中间）
            beforeMove(data) {
                if (data.targetNode.nodeData.x + data.x > 300) return false
                return true
            },
            editBox: {
                boxSelect: false
            }
        }
    }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: 'M0 90L100 200L100 100z',
    scaleX: 5,
    scaleY: 3
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)

}, 600)

app.editor.on(PathEditorEvent.SELECT, (e) => {
    console.log(e)
    // app.destroy()
})