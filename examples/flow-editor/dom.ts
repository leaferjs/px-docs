// #Flow Editor [从DOM中拖入元素]
import { App, Frame, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import { IEditBoxWidget } from '@leafer-in/interface'

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


// 创建可拖拽的 dom 图形（圆形、矩形）
document.body.innerHTML = `
<div id="circle" draggable="true" style="width: 50px; height: 50px; border-radius: 25px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="rect" draggable="true" style="width: 50px; height: 50px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="leafer" style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0;"></div>
`

const app = new App({ view: 'leafer', fill: '#333', editor: { bright: true, skipNested: true }, })

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 50, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5 }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


app.tree.add({ tag: 'Text', x: 50, y: 40, text: '可拖拽上方DOM图形到里面', fill: '#999', fontSize: 16 })


// 设置拖拽数据
const flowWidget = app.editor.editBox.getWidget('FlowWidget') as IEditBoxWidget

document.getElementById('rect').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'rect')
})

document.getElementById('circle').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'circle')
})


// 让画布可以接收拖拽内容
document.getElementById('leafer').addEventListener('dragover', function (e) {
    e.preventDefault()
    const point = app.getPagePointByClient(e) // 浏览器原生事件的 client 坐标 转 应用的 page 坐标  
    flowWidget.onMove(point as any)
})

// 拖拽释放，创建相应图形
document.getElementById('leafer').addEventListener('drop', function (e) {
    const type = e.dataTransfer.getData("type")
    const point = app.getPagePointByClient(e) // 浏览器原生事件的 client 坐标 转 应用的 page 坐标  

    let element: Rect | Ellipse
    if (type === 'rect') {
        element = Rect.one({ fill: '#32cd79', editable: true }, point.x, point.y)
    } else if (type === 'circle') {
        element = Ellipse.one({ fill: '#32cd79', editable: true }, point.x, point.y)
    }

    app.tree.add(element)
    app.editor.target = element
    flowWidget.onMoveEnd(point as any)
})

