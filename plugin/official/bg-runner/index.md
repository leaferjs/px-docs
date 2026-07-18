<script setup>
import Case from '/component/Case.vue'
</script>

# BackgroundRunner

后台运行插件，切换浏览器 tab 标签页后，后台仍可持续渲染动画。

支持禁用、设置最大渲染帧率。

## 更新日志

当前版本为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件暂不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [购买会员](https://www.pxgrow.com/plugin/view/?id=10004) 后才能使用。

### 第一步：获取插件包

购买会员后，你将获得一个名为 `leafer-in-bg-runner-1.0.1.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-bg-runner-1.0.1.tgz

```

```sh [pnpm]
pnpm add ./leafer/leafer-in-bg-runner-1.0.1.tgz

```

```sh [yarn]
yarn add ./leafer/leafer-in-bg-runner-1.0.1.tgz

```

```sh [bun]
bun add ./leafer/leafer-in-bg-runner-1.0.1.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer-in/bg-runner": "file:leafer/leafer-in-bg-runner-1.0.1.tgz"`

---

或通过 script 标签引入，使用全局变量 LeaferIN.bgRunner 访问插件内部功能。

解压 `leafer-in-bg-runner-1.0.1.tgz` ，复制 `package/dist/bg-runner.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/bg-runner.js"></script>
<script>
  const { BackgroundRunner } = LeaferIN.bgRunner
</script>
```

:::

## Electron 中要做到最小化后继续运行，需要确保

不启用 renderer backgrounding

```ts
const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('disable-renderer-backgrounding')
app.commandLine.appendSwitch('disable-background-timer-throttling')
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows')
```

不启用 Chromium 的 background throttling

```ts
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    backgroundThrottling: false, // 🔥 关键
  },
})
```

## 示例

### 切换浏览器 tab 标签页后，后台仍持续渲染动画

```ts
// #后台运行 [切换浏览器tab标签页后，后台仍持续渲染动画]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 
import '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})
```

### 控制最大渲染帧

```ts
// #后台运行 [控制最大渲染帧]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 
import { BackgroundRunner } from '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})

BackgroundRunner.maxFPS = 10 // 控制最大渲染帧，默认为60帧  // [!code hl]
```

### 禁用后台渲染

```ts
// #后台运行 [禁用后台渲染]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件
import { BackgroundRunner } from '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})

BackgroundRunner.disabled = true // 禁用后台渲染  // [!code hl]
```
