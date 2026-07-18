// #Ruler [标尺功能]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

// 标尺自动关联 tree 层，并将标尺添加到 sky 层 // [!code hl:8]
new Ruler(app, {
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
    // selectedColor: '#836DFF', // 选中元素的高亮坐标信息颜色
})
// const ruler = new Ruler(app.tree, {})
// app.sky.add(ruler)

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))