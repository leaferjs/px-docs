// #Ruler [标尺与参考线功能]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@pxgrow/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

// 标尺自动关联 tree 层，并将标尺添加到 sky 层 // [!code hl:7]
const ruler = new Ruler(app, {
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
    // guideColor: '#ff5675' // 辅助线颜色
    // selectedColor: '#836DFF', // 选中内容的颜色
    /* beforeMove({ targetGuide, guideType, x, y }) { // 移动参考线之前的前置钩子函数，同编辑器的 beforeMove 一样使用
         // x, y 为参考线将要移动到的 page 坐标
         console.log(targetGuide, guideType, x, y)
         return true // return false | { x, y }  page坐标系
     } */
})

// 上面的简洁写法，等同于:
// const ruler = new Ruler(app.tree, {})
// app.sky.add(ruler)

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

// 从标尺上可拉出参考线 // [!code hl:4]
// 可直接将参考线的Line元素合并到开源社区吸附插件的元素列表中，进行自动吸附
console.log(ruler.xGuides) // x轴的所有参考线
console.log(ruler.yGuides) // y轴的所有参考线


setTimeout(() => {
    app.editor.select(app.tree.children[0].children[0])
}, 600)