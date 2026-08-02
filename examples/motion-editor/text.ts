// #Motion Editor [编辑文本运动位置]
import { Group, App, Ellipse, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/text-editor' // 导入文本编辑插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/motion-path' // 导入运动路径插件

import '@pxgrow/motion-editor' // 导入运动编辑插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const group = new Group()

const path = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
    editable: true
})

const text = new Text({
    text: 'PxGrow',
    fontSize: 20,
    resizeFontSize: true,
    fill: '#32cd79',
    editable: true,
    motion: { type: 'percent', value: 0.75 }, // 运动位置
    motionAround: 'bottom'  // 路径在文本下方
})

group.add(path)
group.add(text)

app.tree.add(group)

// 模拟选中运动文本，拖拽文本可沿路径移动
setTimeout(() => {
    app.editor.select(text)
}, 600)