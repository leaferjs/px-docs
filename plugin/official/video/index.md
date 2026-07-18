<script setup>
import Case from '/component/Case.vue'
</script>

# Video 元素

Video —— 轻松渲染视频。

::: tip 继承
Video &nbsp;>&nbsp; [Image](https://www.leaferjs.com/ui/reference/display/Image.html) &nbsp;>&nbsp; [Rect](https://www.leaferjs.com/ui/reference/display/Rect.html) &nbsp;>&nbsp; [UI](https://www.leaferjs.com/ui/reference/display/UI.html)
:::

## 更新日志

当前版本为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10012) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `leafer-in-video-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-video-1.0.0-beta.tgz

```

```sh [pnpm]
pnpm add ./leafer/leafer-in-video-1.0.0-beta.tgz

```

```sh [yarn]
yarn add ./leafer/leafer-in-video-1.0.0-beta.tgz

```

```sh [bun]
bun add ./leafer/leafer-in-video-1.0.0-beta.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer-in/video": "file:leafer/leafer-in-video-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 LeaferIN.video 访问插件内部功能。

解压 `leafer-in-video-1.0.0-beta.tgz` ，复制 `package/dist/video.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/video.js"></script>
<script>
  const { Video } = LeaferIN.video
</script>
```

:::

## 关键属性

### width?: `number`

宽度，默认使用视频原始宽度。

### height?: `number`

高度， 默认使用视频原始高度。

### url: `string`

视频 url 地址，支持 Blob url、Data url(Base64)。

我们还提供了 [资源库](https://www.leaferjs.com/ui/reference/resource/Resource.html)，支持预加载视频。

::: tip 注意事项
Video 元素 设置 url 后，不支持同时设置 [fill](https://www.leaferjs.com/ui/reference/UI/fill.html) 属性（url 会覆盖 [fill](https://www.leaferjs.com/ui/reference/UI/fill.html) ），单独设置 [fill](https://www.leaferjs.com/ui/reference/UI/fill.html) 代替 url 是可以的。
:::

## 辅助属性

带 [图案填充](https://www.leaferjs.com/ui/reference/UI/paint/image.html) 的元素自身也支持这些辅助属性（属性需要设置在元素上）。

### pixelRatio: `number`

视频的像素比， 默认为 1，（适配高清屏为 2，超高清屏为 3）。

自动宽高的视频，此属性才有效。

### lazy: `boolean`

视频是否懒加载，可以加快页面显示速度， 默认为 false。

### placeholderColor: `string`

视频占位符的背景颜色，当视频加载中(延迟 100ms)或加载失败时均会显示。

## 只读属性

### ready: `boolean`

视频是否已经加载完成。

### decoder: `IVideoDecoder`

视频的解码实例，视频加载完成才存在。

### playerOptions: `IVideoPlayerOptions`

实时播放参数，视频加载完成才存在。

```ts
interface IVideoPlayOptions {
  paused?: boolean // 是否暂停播放
}
```

## 关键属性

### duration: `number`

获取视频总时长，以秒为单位。

### currentTime: `number`

设置、获取视频的当前播放时间，以秒为单位。

### volume: `number`

设置、获取视频的音量，范围为 0～1。

### paused: `boolean`

视频是否已暂停。

### ended: `boolean`

视频是否已结束。

## 关键方法

### play ( )

播放视频。

### pause ( )

暂停视频。

### togglePlay ( )

暂停或播放视频，自动切换。

### stop( )

停止播放视频，并恢复到起点状态。

## 辅助方法

### load ()

手动加载视频。

一般用于元素未添加到 Leafer 中时，手动加载视频，获取视频自然宽高。

## 资源库

我们还提供了 [资源库](https://www.leaferjs.com/ui/reference/resource/Resource.md)，可预加载视频。

引擎中的所有视频都会通过 资源库 有序并行加载，当视频不再使用时，会进入回收列表，到达阈值会自动销毁。

```ts
// #Video [等待视频加载完，再添加到引擎中]
import { App, Resource } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const url = '/video/forest.mp4'

Resource.loadVideo(url).then(() => { // [!code hl:5]

    app.tree.add(new Video({ url, editable: true }))

})
```

## 视频事件

### [ImageEvent](https://www.leaferjs.com/ui/reference/event/basic/Image.html)

## 示例

### 创建Video

```ts
// #Video [创建Video元素]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const video = new Video({ // [!code hl:7]
    url: '/video/forest.mp4',
    pixelRatio: 2,
    editable: true
})

app.tree.add(video)

// 点击 video 暂停/播放视频 // [!code hl:17]
video.on('click', () => {

    video.togglePlay()

    // 获取、设置视频相关参数，后续会做一个可选的视频播放控制条插件

    // video.duration // 获取视频总时长，以秒为单位

    // video.currentTime // 获取、设置当前视频的播放时间，以秒为单位

    // video.volume // 获取、设置视频的音量，0～1

    // video.paused // 视频是否已暂停

    // video.ended // 视频是否已结束

})
```

### 使用 fill 代替 url

[fill](https://www.leaferjs.com/ui/reference/UI/fill.html) 可支持多个填充。

```ts
// #Video [使用 fill 代替 url]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const video = new Video({
    fill: { // [!code hl:5]
        type: 'video',
        url: '/video/forest.mp4',
        mode: 'stretch',
    },
    pixelRatio: 2,
    editable: true
})

app.tree.add(video)

video.on('click', () => {
    video.togglePlay() // 点击 video 暂停/播放视频
})
```

### 监听视频加载成功事件

```ts
// #Video [监听视频加载成功事件]
import { App, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const video = new Video({
    url: '/video/forest.mp4',
    pixelRatio: 2,
    editable: true
})

app.tree.add(video)

video.once(ImageEvent.LOADED, function (e: ImageEvent) {  // [!code hl:3]
    console.log(e)
})
```

### 监听视频加载失败事件

```ts
// #Video [监听视频加载失败事件]
import { App, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const video = new Video({
    url: '/video/forest.mp4',
    editable: true
})

app.tree.add(video)

video.once(ImageEvent.LOADED, function (e: ImageEvent) {  // [!code hl:3]
    console.log(e)
})
```
