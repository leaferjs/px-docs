// #Path Editor [隐藏曲线控制手柄]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showHandle: false // 是否显示曲线控制手柄 // [!code hl]
        }
    }
})

const path = new Path({ // 需要先创建一条空路径
    editable: true,
    stroke: 'black',
    scale: 5
})

app.tree.add(path)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击创建节点，按住拖拽可创建曲线，按 Del 可删除，按 ESC 可逐步退出，按 Ctrl 拖拽节点可转曲线', fill: '#999', fontSize: 16 })

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '创建模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = true } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '编辑模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = false } }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)