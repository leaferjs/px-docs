// #Stroke Brush [Line 元素]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    cornerRadius: 30, // 折线需带上圆角，才能平滑过渡
    editable: true,
    strokeWidth: 30,
    stroke: [ // [!code hl:6]
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
        }]
})

app.tree.add(line)