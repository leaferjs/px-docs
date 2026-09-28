// #Flow Editor [beforeInsert 事件钩子]
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
            insert: {
                beforeInsert(data) { // 插入元素前的事件钩子  // [!code hl:20]
                    const { target, points, insertType, splitFlow, event } = data

                    console.log(
                        target, // 插入的参考对象，可能为空
                        points, // 插入光标的位置
                        insertType, // 插入类型，before: 插入target前面，after: 插入到target后面，child：插入为target子元素
                        splitFlow, // 是否切分Flow, x: 表示切分x轴，y: 表示切分y轴
                        event // 原生的 DragEvent 事件，带事件坐标信息
                    )

                    if (target && (target.fill === '#888' || (target as Text).text === '阻止事件')) {
                        return false // 返回 false 将阻止插入元素
                    } else if (target) {
                        // 可修改 data 数据后返回
                    }

                    return true
                }
            }
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
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#888', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: '阻止事件', fill: 'white' }] }),
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
    }]
}))

// 显示选中元素宽高信息
const text = new Text({ x: 150, y: 50, text: '未选中元素', fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = '未选中元素'
}