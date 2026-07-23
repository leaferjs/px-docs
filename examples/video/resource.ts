// #Video [等待视频加载完，再添加到引擎中]
import { App, Resource } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const url = '/video/forest.mp4'

Resource.loadVideo(url).then(() => { // [!code hl:5]

    app.tree.add(new Video({ url, pixelRatio: 2, editable: true }))

})