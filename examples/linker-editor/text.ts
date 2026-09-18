// #Linker Editor [双击连线节点添加文本]
import { App, Group, Rect, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/state' // 导入交互状态插件
import '@leafer-in/text-editor' // 导入文本编辑插件
import '@leafer-in/motion-path' // 导入运动路径插件

import { LinkerEditorEvent } from '@pxgrow/linker-editor' // 导入连线编辑插件  // [!code hl:3]
import { Linker } from '@leafer-in/linker' // 导入连线插件  
import '@pxgrow/motion-editor' // 导入运动编辑插件 

const app = new App({
    view: window, fill: '#FFF', editor: {
        LinkerEditTool: { // 连线编辑配置
            // addPoint: { opacity: 1, fill: '#836DFF', stroke: 'white' }, // 定义添加点样式
            editBox: {
                // hideOnMove: true, // 拖动节点时，隐藏节点
            }
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


// 监听全局事件, 在连线节点上双击添加文本  // [!code hl:16]
app.editor.on(LinkerEditorEvent.CREATE_TEXT, (e: LinkerEditorEvent) => {
    const selectedLinker = e.linker
    const motion = selectedLinker.getMotionNearPoint(selectedLinker.parent.getInnerPoint(e)) // 依赖 @pxgrow/motion-editor 插件

    const text = new Text({
        motion: { type: 'percent', value: motion / selectedLinker.getMotionTotal() }, // 运动距离
        motionAround: 'center',
        //motionRotation: false, // 是否跟随路径旋转
        boxStyle: { fill: '#fff' },
        editable: 'single', // 只允许单选
    })

    selectedLinker.parent.add(text)
    app.editor.openInnerEditor(text, true)
})


// 1. 监听全局事件, 自定义创建连线 

let linker: Linker

app.editor.on(LinkerEditorEvent.CREATE_START, (event: LinkerEditorEvent) => { // 开始创建
    linker = new Linker({
        startPoint: event.startPoint,
        editable: 'single', // 只允许单选
        endArrow: 'angle',
        stroke: '#9583f8',
        strokeWidth: 2,
        hittable: false // 创建过程中需暂时取消连线元素交互功能
    })

    // 连线必须被一个Group包裹，用来做运动路径的容器，注意！！！ // [!code hl:6]
    const group = new Group()
    group.add(linker)
    app.tree.add(group)

    linker.motionPath = true // 连线需标记为与运动路径，注意！！！ [!code hl]
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


// 2. 监听全局事件, 自定义编辑连线

app.editor.on(LinkerEditorEvent.CHANGE_START_POINT, (e: LinkerEditorEvent) => { // 拖拽中
    const currentLinker = e.linker as Linker
    currentLinker.startPoint = currentLinker.createStartPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

app.editor.on(LinkerEditorEvent.CHANGE_END_POINT, (e: LinkerEditorEvent) => { // 拖拽中
    const currentLinker = e.linker as Linker
    currentLinker.endPoint = currentLinker.createEndPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})


// 模拟点击元素，显示连线创建点
setTimeout(() => {
    app.editor.select(rect1)
}, 600)