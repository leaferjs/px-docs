// #Image Lighter [瓦片图 加载]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: '#333' })

new ImageLighter(app.tree, {
    tileSize: 2000,  // 瓦片大小，默认为 2048，表示 2048 * 2048 px
    tileAddSize: 2  // 瓦片增加的大小，防止产生瓦片拼接间隙，默认为 2，长宽各增加 2px
})

const rect = new Rect({
    width: 2000,
    height: 2000,
    fill: {
        type: 'image',
        url: '/image/large.png', // 原图为 8000 * 8000px 的大图
        mode: 'stretch',
        lod: {
            width: 8000, // 原图宽度
            height: 8000, // 原图高度
            url: `/image/lod/large-w{width}-h{height}.png`, // lod 的 url 配置请参考 LOD 图片加载示例

            // 配置瓦片图，当图片实际显示大小超过2K时，会开始启用瓦片图加载，仅加载当前视口内的瓦片，避免一次性载入大的原图
            // url中的 width、height 变量为当前 lod 层级的 resize 宽高（先resize原图)，resize后再通过 x、y、w、h 变量进行瓦片裁剪
            tile: { url: `/image/tile/large-lw{width}-lh{height}-x{x}-y{y}-w{w}-h{h}.png` }  // 瓦片图自动裁剪url，还支持 level、index 编号变量
        }
    },
    editable: true
})

app.tree.add(rect)

app.waitReady(() => {
    app.tree.zoom('fit')
})