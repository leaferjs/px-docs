// #Flow Editor [元素切换自动布局与自由移动模式]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({ view: window, fill: '#333', editor: { bright: true, skipNested: true }, })

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

const block = new Box({
    fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50,
    inFlow: false // 是否参与自动布局，设为false, 表示不参与，可以在自动布局元素中自由移动  // [!code hl]
})

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [block] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [
        {
            tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
            hoverStyle: { fill: '#FF4B4B' },
            children: [{ tag: 'Text', text: '自动布局', padding: [5, 10] }],
            event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.inFlow = true; updateInfo() } } }
        }, {
            tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
            hoverStyle: { fill: '#FF4B4B' },
            children: [{ tag: 'Text', text: '自由移动', padding: [5, 10] }],
            event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.inFlow = false; editor.toTop(); updateInfo() } } }
        },
    ]
}))

// 显示选中元素宽高信息
const emptyText = '元素设置 inFlow 为 false, 可自由移动'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag.end'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) {
        const inflow = element.parent.flow && element.inFlow
        text.text = '选中元素 inFlow = ' + (inflow ? 'true' : 'false') + ', 表示元素' + (inflow ? '可 自动布局' : '可 自由移动')
    } else text.text = emptyText
}

editor.select(block)