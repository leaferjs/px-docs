// #Ruler [浅色风格]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#F2f2f2',
    pointSnap: true,
    editor: {},
})

new Ruler(app, {
    fill: '#F2f2f2', // 标尺的填充色，只能为字符串 // [!code hl]
})

new ScrollBar(app, { padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))