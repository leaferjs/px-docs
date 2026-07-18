// #运动路径 [沿路径运动]
import { Group, App, Text, Polygon, Debug } from 'leafer-ui' // Leafer,Ellipse,
import '@leafer-in/animate' // 导入动画插件
import '@leafer-in/motion-path' // 导入运动路径插件
import '@leafer-in/motion-text' // 导入运动路径插件
import '@leafer-in/state' // 导入运动路径插件

// #创建 Text [标准创建 (App)]
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/text-editor' // 导入文本编辑插件 
import '@pxgrow/path-editor' // 导入文本编辑插件 

const app = new App({ view: window, editor: {} })

const group = new Group({ hitChildren: false, editable: true })

const path = new Polygon({
    x: 100,
    y: 100,
    editable: true,
    motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
    points: [0, 90, 100, 60, 200, 80, 300, 40, 375, 50, 450, 10, 550, 90, 550, 90, 0, 90],
    curve: true,
    fill: '#32cd79',
})

// const path = new Ellipse({
//     x: 100,
//     y: 100,
//     width: 200,
//     height: 200,
//     fill: "#32cd79",
//     motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
//     // editOuter: 'EllipseEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 
//     editable: true
// })



const text = new Text({
    // x: 100,
    // y: 100,
    fill: 'black',
    text: 'Welcome to LeaferJS',
    editable: true,
    //fontSize: 20,
    //around: 'bottom',
    //letterSpacing: 3,
    // hoverStyle: {
    //     fill: 'red'
    // },
    motion: 340,
    motionText: true,
    motionVertical: 'above', // 'center', //
    motionRotation: false
    // animation: { // 沿 path 运动至 100%
    //     style: { motion: { type: "percent", value: 1 } },
    //     duration: 9,
    //     loop: true
    // }
})

group.add(path)
group.add(text)


app.tree.add(group)

// setTimeout(() => {
//     text.motion = 500
// }, 2000)

Debug.showRepaint = true

console.log(path.getPathString(true))