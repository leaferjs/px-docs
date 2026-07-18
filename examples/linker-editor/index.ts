// #Linker Editor [创建与编辑连线元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/state' // 导入交互状态插件

import { LinkerEditorEvent } from '@pxgrow/linker-editor' // 导入连线编辑插件  // [!code hl:2]
import { Linker } from '@leafer-in/linker' // 导入连线插件  

const app = new App({
    view: window, editor: {
        // linkPoint: [{ fill: 'red' }, { visible: false }], // 连线的创建控制点样式，支持单独配置4个，或配置一个应用到所有
        //hideLinkPoints: false, // 是否隐藏创建点控制点
        LinkerEditTool: { // 连线编辑配置
            // point: {}, // 基础控制点样式
            // startPoint: { stroke: 'red' }, // 起点样式
            // endPoint: {}, // 结束点样式
        }
    }
})

app.tree.cacheId = true // 创建时缓存元素id, 加快查找连线元素id的速度

const rect1 = Rect.one({
    id: 'rect1',
    editable: true,
    linkable: true, // 标记元素可进行连线，可设置 'start', 表示只能作为连线起点，或设置 'end' 表示只能作为连线终点 // [!code hl]
    fill: '#FEB027',
    cornerRadius: [20, 0, 0, 20]
}, 100, 100)

const rect2 = Rect.one({ id: 'rect2', editable: true, linkable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 100, 300)
const rect3 = Rect.one({ id: 'rect3', editable: true, linkable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 400, 200)

app.tree.add([rect1, rect2, rect3])


// 监听全局事件自定义创建连线 // [!code hl]

let linker: Linker

app.editor.on(LinkerEditorEvent.CREATE_START, (event: LinkerEditorEvent) => { // 开始创建
    linker = new Linker({
        startPoint: event.startPoint,
        editable: 'single', // 只允许单选
        endArrow: 'angle',
        stroke: '#836DFF',
        strokeWidth: 2,
        hittable: false // 创建过程中需暂时取消连线元素交互功能
    })
    app.tree.add(linker)
})

app.editor.on(LinkerEditorEvent.CREATE_DRAG, (e: LinkerEditorEvent) => { // 拖拽中
    linker.endPoint = linker.createEndPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

app.editor.on(LinkerEditorEvent.CREATE_END, () => { // 创建结束
    linker.hittable = true
})

// 模拟点击元素，显示连线创建点
setTimeout(() => {
    app.editor.select(rect1)
}, 600)