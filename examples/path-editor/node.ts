// #Path Editor [路径节点对象]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            // dataType: 'node' // 返回 path 的数据类型，默认为 auto，会自动根据原始数据判断。设为 node 表示节点对象，number 表示纯数字路径数据
        }
    }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: [ // 路径节点对象
        { name: "M^", x: 0, y: 90, b: { x: 10, y: 75 } }, // a 为节点前面的手柄，b 为节点后面的手柄
        { name: "C^", x: 20, y: 60, a: { x: 8.79, y: 62.8 }, b: { x: 28.79, y: 57.8 } },
        { name: "C^", x: 40, y: 80, a: { x: 32.25, y: 83.87 }, b: { x: 52.25, y: 73.87 } },
        { name: "C^", x: 60, y: 40, a: { x: 47.53, y: 50.69 }, b: { x: 65.03, y: 35.69 } },
        { name: "C^", x: 75.2, y: 50, a: { x: 70.75, y: 54.45 }, b: { x: 85.75, y: 39.45 } },
        { name: "C^", x: 90, y: 10, a: { x: 85.67, y: 3.07 }, b: { x: 98.17, y: 23.07 } },
        { name: "C^", x: 100, y: 90, a: { x: 95, y: 50 }, b: { x: 100, y: 90 } },
        { name: "Z^" }
    ],
    scale: 5
})

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)