// #Image Lighter [使用动图]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'
import '@leafer-in/film'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: '#333' })

new ImageLighter(app.tree, {}) // 图片加速

const rect = new Rect({
    width: 8000,
    height: 8000,
    placeholderColor: 'white',
    fill: {
        type: 'film',
        url: '/film/color.gif', // 动图
        mode: 'stretch',
        showProgress: 'gray',
    },
    editable: true
})

app.tree.add(rect)

app.waitReady(() => {
    app.tree.zoom('fit')
})