<script setup>
import Case from '/component/Case.vue'
</script>

# Scroller 元素

适用于 [Box](https://www.leaferjs.com/ui/reference/display/Box.html) / [Frame](https://www.leaferjs.com/ui/reference/display/Frame.html) 元素的滚动条，仅需设置 [overflow](https://www.leaferjs.com/ui/reference/display/Box.html#overflow-ioverflow) 属性为 'scroll' 即可启用。

::: tip 继承
Scroller &nbsp;>&nbsp; [Group](https://www.leaferjs.com/ui/reference/display/Group.html)
:::

## 更新日志

当前版本为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 scroller 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/scroller)。

::: code-group

```sh [npm]
npm install @leafer-in/scroller
```

```sh [pnpm]
pnpm add @leafer-in/scroller
```

```sh [yarn]
yarn add @leafer-in/scroller
```

```sh [bun]
bun add @leafer-in/scroller
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.scroller 访问插件内部功能。

::: code-group

```html [scroller.min]
<script src="https://unpkg.com/@leafer-in/scroller@1.0.1/dist/scroller.min.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

```html [scroller]
<script src="https://unpkg.com/@leafer-in/scroller@1.0.1/dist/scroller.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

:::

<!--
## 📦 安装插件（本地安装）

本插件暂不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [赞助解锁](https://www.pxgrow.com/plugin/view/?id=10003) 后才能使用。

赞助贡献值 >= 10 可下载安装包，贡献值 >= 50 可下载源码包。

### 第一步：获取插件包

赞助后，你将获得一个名为 `leafer-in-scroller-1.0.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-scroller-1.0.0.tgz

```

```sh [pnpm]
pnpm add ./leafer/leafer-in-scroller-1.0.0.tgz

```

```sh [yarn]
yarn add ./leafer/leafer-in-scroller-1.0.0.tgz

```

```sh [bun]
bun add ./leafer/leafer-in-scroller-1.0.0.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer-in/scroller": "file:leafer/leafer-in-scroller-1.0.0.tgz"`

---

或通过 script 标签引入，使用全局变量 LeaferIN.scroller 访问插件内部功能。

解压 `leafer-in-scroller-1.0.0.tgz` ，复制 `package/dist/scroller.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/scroller.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

::: -->

## 示例

### 快速创建

```ts
// #Box滚动条 [快速创建]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({ // 鼠标 hover 时显示滚动条
    fill: 'white',
    overflow: 'scroll', // 溢出时滚动显示内容  //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)
```

### 夜晚模式

```ts
// #Box滚动条 [夜晚模式]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: '#111',
    overflow: 'scroll',
    scrollConfig: { theme: 'dark' }, // 夜晚模式下的滚动条显示效果 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 配置颜色和光标

```ts
// #Box滚动条 [配置颜色和光标]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { style: { fill: 'blue', cursor: 'pointer' } }, // 滚动条配置颜色和光标 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 无圆角的滚动条

```ts
// #Box滚动条 [无圆角的滚动条]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { size: 10, cornerRadius: 0, endsMargin: 0, sideMargin: 0 }, // 无圆角的滚动条效果 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 保持显示

```ts
// #Box滚动条 [保持显示]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { hideOnActionEnd: false }, // 离开滚动区域后，不自动隐藏滚动条 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 只允许拖拽滚动条进行滚动内容

```ts
// #Box滚动条 [只允许拖拽滚动条进行滚动内容]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { scrollType: 'drag' }, // 只允许拖拽滚动条进行滚动内容，鼠标滚动不生效 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 跟随视图放大滚动条

```ts
// #Box滚动条 [跟随视图放大滚动条]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
    type: 'design'
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { scaleFixed: false }, // 跟随视图放大滚动条 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 与视图滚动条共存

```ts
// #Box滚动条 [与视图滚动条共存]
import { App, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import { ScrollBar } from '@leafer-in/scroll' // 导入视图滚动条 (可选，后期会被 scroller 插件替代)
import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]


const app = new App({
    view: window,
    fill: '#333',
    move: { holdSpaceKey: true },
    tree: { type: 'document' },
    sky: {}
})

new ScrollBar(app)

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',  // 滚动元素到顶部或底部时，才允许滚动视图（与html中的div滚动逻辑一致）  //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

app.tree.add(box)


app.tree.add(Rect.one({ draggable: true, fill: '#32cd79' }, 300, 2000))

```

### 与视图滚动条共存时，阻止默认视图滚动

```ts
// #Box滚动条 [与视图滚动条共存时，阻止默认视图滚动]
import { App, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import { ScrollBar } from '@leafer-in/scroll' // 导入视图滚动条 (可选，后期会被 scroller 插件替代)
import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]


const app = new App({
    view: window,
    fill: '#333',
    tree: { type: 'document' },
    sky: {}
})

new ScrollBar(app)

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { stopDefault: true }, //  滚动元素时，阻止默认视图滚动 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

app.tree.add(box)


app.tree.add(Rect.one({ draggable: true, fill: '#32cd79' }, 300, 2000))

```
