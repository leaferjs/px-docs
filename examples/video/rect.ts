// #Video [使用 Rect 代替 Video]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const video = new Rect({
    fill: { // [!code hl:5]
        type: 'video',
        url: '/video/forest.mp4',
        mode: 'stretch',
    },
    pixelRatio: 2,
    editable: true
})

app.tree.add(video)