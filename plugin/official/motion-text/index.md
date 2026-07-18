<script setup>
import Case from '/component/Case.vue'
</script>

# Motion Text

Motion Text —— 轻松实现运动路径文本效果。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10022) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-motion-text-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-motion-text-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-motion-text-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-motion-text-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-motion-text-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/motion-text": "file:pxgrow/pxgrow-motion-text-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.motionText 访问插件内部功能。

需解压 `pxgrow-motion-text-1.0.0-beta.tgz` 文件，复制 `package/dist/motion-text.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/motion-text.js"></script>
<script>
  const { PointsEditTool } = PxGrow.motionText
</script>
```

:::

## 示例

### 运动文本

```ts
// #Motion Text [运动文本]
import { Group, App, Line, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件
import '@leafer-in/motion-path' // 导入运动路径插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/motion-text' // 导入运动文本插件 

const app = new App({ view: window, tree: { type: 'viewport' } })

const group = new Group()

const path = new Line({
    x: 100,
    y: 100,
    motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
    points: [0, 90, 100, 60, 200, 80, 300, 40, 375, 50, 450, 10, 550, 90, 550, 90],
    curve: 0.4,
    fill: '#32cd79',
})


const text = new Text({
    fill: '#32cd79',
    text: 'Welcome to LeaferJS',
    letterSpacing: 1,
    motion: 0,
    motionText: true, // 设为运动文本，沿着路径排列 
    motionVertical: 'above', // 文本在运动路径上方
    animation: { // 沿 path 运动至 100%
        style: { motion: { type: "percent", value: 1 } },
        duration: 3,
        easing: 'linear',
        loop: true
    }
})

group.add(path)
group.add(text)

app.tree.add(group)
```

### 环绕圆形

```ts
// #Motion Text [环绕圆形]
import { Group, App, Ellipse, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/text-editor' // 导入文本编辑插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/motion-path' // 导入运动路径插件

import '@leafer-in/motion-text' // 导入运动文本插件 // [!code hl]

const app = new App({ view: window, editor: {} })

const group = new Group({ hitChildren: false, editable: true })

const path = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
    editable: true
})

const text = new Text({
    text: 'Welcome to LeaferJS',
    fontSize: 20,
    fill: '#32cd79',
    editable: true,
    motion: 370, // 运动位置
    motionText: true, // 设为运动文本，沿着路径排列 // [!code hl]
    motionVertical: 'above', // 文本在运动路径上方
})

group.add(path)
group.add(text)

app.tree.add(group)
```
