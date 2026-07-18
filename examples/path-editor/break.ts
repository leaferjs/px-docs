// #Path Editor [断开节点]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    editable: true,
    stroke: 'black',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '断开节点', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').breakNode() } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '连接节点', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').connectNode() } }
})


app.sky.add({
    tag: 'Box', x: 215, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '合并连接', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').mergeNode() } }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)