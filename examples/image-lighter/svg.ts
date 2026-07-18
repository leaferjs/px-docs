// #Image Lighter [复杂 SVG 图片流畅编辑]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {}) // 图片加速

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