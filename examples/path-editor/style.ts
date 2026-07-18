// #Path Editor [配置样式]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            node: { fill: 'blue', stroke: 'white' }, // 节点样式
            beginNode: { fill: 'red', stroke: 'white' }, // 起始节点样式
            handle: { stroke: 'blue' }, // 手柄控制点样式
            editBox: { // 可临时覆盖editor配置
                stroke: 'gray' // 线条颜色
            }
        }
    }
})

const path = new Path({ // 需要先创建一条空路径
    editable: true,
    stroke: 'black',
    scale: 5
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击创建节点，按住拖拽可创建曲线，按 Del 可删除，按 ESC 可退出，按 Ctrl 拖拽节点可转曲线', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)