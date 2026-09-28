// #Flow Editor [同步 resize 关联元素]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, fill: '#333', editor: {
        bright: true,
        skipNested: true,
        FlowEditTool: { // 自动布局编辑配置
            syncResize: true  // 是否同步resize上下、父级元素 // [!code hl]
        }
    },
})

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        editFlowConfig: {
            insertFit: true, // 编辑过程中，是否强制自动填满 x、y 轴剩余空间，可单独设置 x 或 y // [!code hl]
        },
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, editFlowConfig: { insertFit: true }, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: true }, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x + y', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: 'x' }, width: 100, autoHeight: 1, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, editFlowConfig: { insertFit: 'y' }, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = Y', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为固定宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = undefined; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为固定高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = undefined; updateInfo() } } }
    },
    ]
}))

// 显示选中元素宽高信息
const emptyText = '自动宽高的元素会同步 resize 相关联元素，设为固定宽高可取消关联'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = emptyText
}