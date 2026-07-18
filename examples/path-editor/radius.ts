// #Path Editor [单独设置节点圆角]
import { App, PointerEvent, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl:2]
import '@leafer-in/corner' // 导入圆角插件

const app = new App({
    view: window, editor: {
        PathEditor: {
            dataType: 'node' // 必须为 node 模式才能添加节点圆角 // [!code hl]
        }
    }
})

const path = new Polygon({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90],
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '节点圆角', fill: '#999' })


// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '增加圆角', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').setNodeRadius(5) // [!code hl]
        }
    }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '移除圆角', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').removeNodeRadius() // [!code hl]
        }
    }
})

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)