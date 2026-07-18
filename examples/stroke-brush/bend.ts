// #Stroke Brush [bend 弯曲笔刷]
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
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            bend: false // 是否弯曲笔刷，默认为true, 为 false 时，单个笔刷仅由4个顶点构成，设为 auto 时：表示长方形笔刷为 true, 非长方形为 false // [!code hl]
        }]
})

app.tree.add(line)