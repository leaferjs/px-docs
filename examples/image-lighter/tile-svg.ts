// #Image Lighter [SVG 放大时自动切片]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {  // 图片加速
    tileSize: 1024, // 瓦片大小，默认为 2048，表示 2048 * 2048 px，SVG 场景建议配小一点
    tileSVG: true  // SVG 放大时是否自动切片(瓦片），防止渲染大SVG原图卡住页面，默认为false
})

const rect = new Rect({
    width: 500,
    fill: {
        type: 'image',
        url: '/image/large.svg',
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(rect)

app.waitViewCompleted(() => {
    app.tree.zoom('fit')
})