// #Ruler [隐藏与显示标尺]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

const ruler = new Ruler(app, {
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
})

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))


// 隐藏与显示标尺 // [!code hl:10]
setTimeout(() => {

    ruler.visible = false // 隐藏标尺

    setTimeout(() => {
        ruler.visible = true // 显示标尺
    }, 1500)

}, 1500)
