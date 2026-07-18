<script setup>
import Case from '/component/Case.vue'
</script>

# Film 元素

Film 动图元素 —— 在 Canvas 中实现动图渲染与播放控制。

::: tip 继承
Film &nbsp;>&nbsp; [Image](https://www.leaferjs.com/ui/reference/display/Image.html) &nbsp;>&nbsp; [Rect](https://www.leaferjs.com/ui/reference/display/Rect.html) &nbsp;>&nbsp; [UI](https://www.leaferjs.com/ui/reference/display/UI.html)
:::

## 更新日志

当前版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10011) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `leafer-in-film-1.0.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-film-1.0.0.tgz

```

```sh [pnpm]
pnpm add ./leafer/leafer-in-film-1.0.0.tgz

```

```sh [yarn]
yarn add ./leafer/leafer-in-film-1.0.0.tgz

```

```sh [bun]
bun add ./leafer/leafer-in-film-1.0.0.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer-in/film": "file:leafer/leafer-in-film-1.0.0.tgz"`

---

或通过 script 标签引入，使用全局变量 LeaferIN.film 访问插件内部功能。

解压 `leafer-in-film-1.0.0.tgz` ，复制 `package/dist/film.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/film.js"></script>
<script>
  const { Film } = LeaferIN.film
</script>
```

:::

## 关键属性

### width?: `number`

宽度，默认使用动图原始宽度。

### height?: `number`

高度， 默认使用动图原始高度。

### url: `string`

动图 url 地址，支持 Blob url、Data url(Base64)。

我们还提供了 [资源库](https://www.leaferjs.com/ui/reference/resource/Resource.html)，支持预加载动图。

::: tip 注意事项
Film 元素 设置 url 后，不支持同时设置 [fill](https://www.leaferjs.com/ui/reference/UI/fill.html) 属性（url 会覆盖 [fill](https://www.leaferjs.com/ui/reference/UI/fill.html) ），单独设置 [fill](https://www.leaferjs.com/ui/reference/UI/fill.html) 代替 url 是可以的。
:::

默认支持gif格式，其他格式部分浏览器支持，想全面支持，需要安装相应的格式解码插件。

```ts
type IFilmFileType =
  | 'gif'
  | 'webp'
  | 'png' // apng
  | 'avif'
```

## 辅助属性

带 [图案填充](https://www.leaferjs.com/ui/reference/UI/paint/image.html) 的元素自身也支持这些辅助属性（属性需要设置在元素上）。

### pixelRatio: `number`

动图的像素比， 默认为 1，（适配高清屏为 2，超高清屏为 3）。

自动宽高的动图，此属性才有效。

### lazy: `boolean`

动图是否懒加载，可以加快页面显示速度， 默认为 false。

### placeholderColor: `string`

动图占位符的背景颜色，当动图加载中(延迟 100ms)或加载失败时均会显示。

## 只读属性

### ready: `boolean`

动图是否已经加载完成。

<!-- ### image?: [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

原始动图封装对象, 动图加载完成才存在。 -->

### decoder: `IFilmDecoder`

动画的解码实例，动图加载完成才存在。

```ts
interface IFilmDecoder {
  width: number
  height: number

  total: number // 总的帧数
  loop: number // 循环方式，0表示无限循环
  frames: IFilmFrame[] // 帧数据
}

interface IFilmFrame {
  image?: any // 不存在时使用合并图
  duration: number // 帧时长，毫秒
  decoding?: boolean // 正在解码中

  //在合并图中的位置
  x?: number
  y?: number
}
```

### playerOptions: `IFilmPlayerOptions`

实时播放参数，动图加载完成才存在。

```ts
interface IFilmPlayOptions {
  nowIndex?: number // 当前播放到的帧位置
  pauseIndex?: number // 播放到这一帧暂停
  loop?: number // 已经循环播放了多少次？
  speed?: number // 播放速度
  paused?: boolean // 是否暂停播放
}
```

## 关键方法

### play ( )

播放动图。

### pause ( )

暂停动图。

### togglePlay ( )

暂停或播放动图，自动切换。

### stop( )

停止播放动图，并恢复到起点状态。

### seekFrame ( frameIndex: `number` )

跳转到指定帧。

可以通过 [decoder.total](#decoder-ifilmdecoder) 获取总帧数。

## 辅助方法

### load ()

手动加载动图。

一般用于元素未添加到 Leafer 中时，手动加载动图，获取动图自然宽高。

## 资源库

我们还提供了 [资源库](https://www.leaferjs.com/ui/reference/resource/Resource.md)，可预加载动图。

引擎中的所有动图都会通过 资源库 有序并行加载，当动图不再使用时，会进入回收列表，到达阈值会自动销毁。

```ts
// #Film [等待动图加载完，再添加到引擎中]
import { App, Resource } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const url = '/film/color.gif'

Resource.loadFilm(url).then(() => { // [!code hl:5]

    app.tree.add(new Film({ url, editable: true }))

})

// Resource.loadFilm(url, 'gif') // 第二个参数可以强制指定动图格式 'gif' | 'webp' | 'png' | 'avif'，需要安装相应的格式解码插件


```

## 动图事件

### [ImageEvent](https://www.leaferjs.com/ui/reference/event/basic/Image.html)

## 示例

### 创建Film

```ts
// #Film [创建Film元素]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Film({ // [!code hl:4]
    url: '/film/color.gif',
    editable: true
})

app.tree.add(film)

film.on('click', () => {
    film.togglePlay() // 点击 film 暂停/播放动图
})
```

### 使用 fill 代替 url

[fill](https://www.leaferjs.com/ui/reference/UI/fill.html) 可支持多个填充。

```ts
// #Film [使用 fill 代替 url]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Film({
    fill: { // [!code hl:5]
        type: 'film',
        url: '/film/color.gif',
        mode: 'stretch',
    },
    editable: true
})

app.tree.add(film)

film.on('click', () => {
    film.togglePlay() // 点击 film 暂停/播放动图
})
```

### 使用 Rect 代替 Film

```ts
// #Film [使用 Rect 代替 Film]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Rect({
    fill: { // [!code hl:5]
        type: 'film',
        url: '/film/color.gif',
        mode: 'stretch',
    },
    editable: true
})

app.tree.add(film)
```

### 监听动图加载成功事件

```ts
// #Film [监听动图加载成功事件]
import { App, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Film({
    url: '/film/color.gif',
    editable: true
})

app.tree.add(film)

film.once(ImageEvent.LOADED, function (e: ImageEvent) {  // [!code hl:3]
    console.log(e)
})
```

### 监听动图加载失败事件

```ts
// #Film [监听动图加载失败事件]
import { App, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Film({
    url: '/film/color.gif',
    editable: true
})

app.tree.add(film)

film.once(ImageEvent.LOADED, function (e: ImageEvent) {  // [!code hl:3]
    console.log(e)
})
```
