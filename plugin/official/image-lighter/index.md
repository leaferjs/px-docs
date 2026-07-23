<script setup>
import Case from '/component/Case.vue'
</script>

# ImageLighter

光速引擎 · Image Lighter —— 让大图浏览编辑丝滑流畅。

## 📆 更新日志

当前为 v1.1.5，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10006) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-image-lighter-1.1.5.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-image-lighter-1.1.5.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-image-lighter-1.1.5.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-image-lighter-1.1.5.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-image-lighter-1.1.5.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/image-lighter": "file:pxgrow/pxgrow-image-lighter-1.1.5.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.imageLighter 访问插件内部功能。

需解压 `pxgrow-image-lighter-1.1.5.tgz` 文件，复制 `package/dist/image-lighter.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/image-lighter.js"></script>
<script>
  const { ImageLighter } = PxGrow.imageLighter
</script>
```

:::

## 示例

### 大图流畅操作

```ts
// #Image Lighter [大图流畅操作]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: '#333' })

new ImageLighter(app.tree, {}) // 图片加速

const rect = new Rect({
    width: 8000,
    height: 8000,
    placeholderColor: 'white',
    fill: {
        type: 'image',
        url: '/image/large.png', // 原图为 8000 * 8000px 的大图
        mode: 'stretch',
        showProgress: 'gray',
    },
    editable: true
})

app.tree.add(rect)

app.waitReady(() => {
    app.tree.zoom('fit')
})
```

### 大长图流畅操作

```ts
// #Image Lighter [大长图流畅操作]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {}) // 图片加速

const rect = new Rect({
    fill: {
        type: 'image',
        url: '/image/long-large.png', // 原图为 2000 * 50000px 的大长图
        mode: 'stretch',
        showProgress: 'gray',
    },
    pixelRatio: devicePixelRatio,
    placeholderColor: 'white',
    editable: true
})

app.tree.add(rect)

// app.waitViewCompleted(() => {
//     app.tree.move(0, -100)
// })
```

### 超大图流畅操作

```ts
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
```

### 1 千张不同的图片流畅操作

```ts
// #Image Lighter [1千张不同的图片流畅操作]
import { IGroup } from '@leafer-ui/interface'
import { App, Image, Group, Resource } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {}) // 图片加速

createImages(app.tree, 1) // 1千张图片

app.waitReady(() => {
    app.tree.zoom('fit')
})


function createImages(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * 0.6 * Math.floor(i / column)
        view.add(group)
        createGroup(group, i, 0, 0, `hsl(${i * 3},60%,50%)`)
    }
}

function createGroup(group: IGroup, num: number, startX: number, startY: number, color: string) {
    var y, image

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 10; j++) {
            if (j % 10 === 0) y += 10
            image = new Image()
            image.x = startX
            image.y = y
            image.width = 10
            image.height = 6
            image.editable = true
            createUrl(image, num * 10000 + i * 10 + j + 1, color)
            group.add(image)
            y += 8
        }
        startX += 10 + 2
    }
}

// 模拟不重复的图片（每张1000 * 600px）
function createUrl(image: Image, count: number, color: string): void {
    setTimeout(() => {
        const canvas = new OffscreenCanvas(1000, 600)
        const context = canvas.getContext('2d')

        context.fillStyle = color
        context.fillRect(0, 0, 1000, 600)

        for (let i = 0; i < 10; i++) {
            context.fillStyle = `hsl(${Math.round(10 + Math.random() * 100)},70%,50%)`
            context.beginPath()
            context.arc(Math.random() * 1000, Math.random() * 600, 10 + Math.random() * 100, 0, Math.PI * 2)
            context.fill()
        }

        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.font = `bold 150px Arial`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(count.toString(), 500, 300)

        const bitmap = canvas.transferToImageBitmap()
        image.url = Resource.setImage('leafer://' + count + '.jpg', bitmap).url
    }, count * 5)
}
```

### 复杂 SVG 图片流畅编辑

```ts
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
```

### LOD 图片加载

```ts
// #Image Lighter [LOD 图片加载]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: '#333' })

new ImageLighter(app.tree, {}) // 图片加速

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
