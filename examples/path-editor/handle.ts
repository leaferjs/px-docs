// #Path Editor [转换曲线手柄类型]
import { App, Path, Text, PointerEvent, PathNodeHandleType } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { PathEditorEvent } from '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: { PathEditor: { beginNode: { stroke: 'red' } } }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: 'M30 30L50 100L80 30z',
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '曲线手柄', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '转为直线', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.none) } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '自由曲线', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.free) } }
})

app.sky.add({
    tag: 'Box', x: 215, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '镜像角度', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.mirrorAngle) } }
})

app.sky.add({
    tag: 'Box', x: 290, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '镜像角度和长度', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.mirror) } }
})



// 显示类型
const text = new Text({ x: 10, y: 70, text: '', fill: '#999' })
app.tree.add(text)


app.editor.on(PathEditorEvent.SELECT, (e: PathEditorEvent) => {
    const { pathEditor } = e
    if (pathEditor.currentNode) {

        const { nodeData } = pathEditor.currentNode
        let typeName: string
        switch (nodeData.ab) {
            case PathNodeHandleType.none:
                typeName = '直线'
                break
            case PathNodeHandleType.free:
                typeName = '自由曲线'
                break
            case PathNodeHandleType.mirrorAngle:
                typeName = '镜像角度'
                break
            case PathNodeHandleType.mirror:
                typeName = '镜像角度和长度'
                break
            default:
                typeName = pathEditor.currentNode.isCurveNode ? '镜像角度' : '直线'
        }

        text.text = '当前节点的控制手柄类型为：' + typeName

    } else {
        text.text = ''
    }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)