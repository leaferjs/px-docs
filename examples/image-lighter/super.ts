// #Image Lighter [超大图流畅操作]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {}) // 图片加速

const rect = new Rect({
    width: 20000,
    height: 20000,
    placeholderColor: 'white',
    fill: {
        type: 'image',
        url: '/image/super-large.png', // 原图为 20000 * 20000px 的超大图
        mode: 'stretch',
        showProgress: 'gray',
    },
    editable: true
})

app.tree.add(rect)

app.waitReady(() => {
    app.tree.zoom('fit')
})