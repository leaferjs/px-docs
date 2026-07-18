// #Image Lighter [自动回收资源]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: '#333' })

// 图片加速
new ImageLighter(app.tree, {
    // recycleLevels: false | true | 1, // 是否自动回收 LOD 层级，设为 true 会保留 2 个层级，设为 1 仅保留1个层级，默认为false
    recycleOriginImage: true // 存在 LOD 图片的情况下，是否自动回收原始大图，默认为false
})

const rect = new Rect({
    width: 2000,
    height: 2000,
    fill: {
        type: 'image',
        url: '/image/large.png', // 原图为 8000 * 8000px 的大图
        mode: 'stretch',
        // lod层级按需自动获取url, lod层级会从原始图的0.5倍、0.25倍，每层级依次除2递进，直至宽高接近16px为止
        // 如果存在大的lod层级缓存时，不会再次加载小的lod层级图片，会直接通过大的生成小的层级，避免浪费网络资源
        lod: {
            url: `/image/lod/large-w{width}-h{height}.png`, // lod层级按需自动裁剪url， width、height、level等变量会自动替换为真实url
            width: 8000, // 原图宽度
            height: 8000, // 原图高度
            // thumb: -5, // 首次加载的lod层级，-1表示原始图的0.5倍，-2表示0.25倍，每层级依次除2类推，默认会加载最小层级
        }
    },
    editable: true
})

app.tree.add(rect)

app.waitReady(() => {
    app.tree.zoom('fit')
})