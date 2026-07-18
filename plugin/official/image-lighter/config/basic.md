<script setup>
import Case from '/component/Case.vue'
</script>

# 光速引擎配置

## 关键属性

### recycleOriginImage?: `boolean`

是否自动回收原始大图，存在Lod的情况下， 默认为false。

### recycleLevels?: `boolean` | `number`

是否自动回收层级，只保留二个层级，默认为false。

### tileSize?: `number`

瓦片的大小，默认为 2048，表示 2048 \* 2048。

### tileAddSize?: `number`

瓦片增加的大小，防止产生拼接间隙，默认为 2，表示 长宽各增加2px。

### tileSVG?: `boolean`

是否允许 SVG 自动切片，默认为false。

设为true， 表示 SVG 放大时可自动切片，防止大 SVG 卡住页面。

## 示例

### 瓦片图 加载

```ts
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
```

### 自动回收资源

```ts
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
```

### SVG 放大时自动切片

```ts
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
```
