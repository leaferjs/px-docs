<script setup>
import Case from '/component/Case.vue'
</script>

# Stroke Brush

Stroke Brush —— 轻松实现图标笔刷。

## 📆 更新日志

当前为 v1.1.4，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10019) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-stroke-brush-1.1.4.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-stroke-brush-1.1.4.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-stroke-brush-1.1.4.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-stroke-brush-1.1.4.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-stroke-brush-1.1.4.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/stroke-brush": "file:pxgrow/pxgrow-stroke-brush-1.1.4.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.strokeBrush 访问插件内部功能。

需解压 `pxgrow-stroke-brush-1.1.4.tgz` 文件，复制 `package/dist/stroke-brush.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/stroke-brush.js"></script>
<script>
  const { StrokeBrushHelper, BrushImage } = PxGrow.strokeBrush
</script>
```

:::

## 示例

### Line 曲线

```ts
// #Stroke Brush [Line 曲线]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [ // [!code hl:6]
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
        }]
})

app.tree.add(line)
```

### Line 折线

```ts
// #Stroke Brush [Line 元素]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    cornerRadius: 30, // 折线需带上圆角，才能平滑过渡
    editable: true,
    strokeWidth: 30,
    stroke: [ // [!code hl:6]
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
        }]
})

app.tree.add(line)
```

### 翻转图标

```ts
// #Stroke Brush [翻转图标]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            scale: { x: 1, y: -1 } // y轴设为-1可翻转图片，设为1表示正常 // [!code hl]
        }]
})

app.tree.add(line)
```

### 图标间隔

```ts
// #Stroke Brush [图标间隔]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            gap: { x: 20 } // 每个图标间隔20px // [!code hl]
        }]
})

app.tree.add(line)
```

### 图标透明度

```ts
// #Stroke Brush [图标透明度]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            opacity: 0.5, // 设置笔刷透明度 // [!code hl]
        }]
})

app.tree.add(line)
```

### Rect 元素

```ts
// #Stroke Brush [Rect元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    cornerRadius: 30, // 折线需带上圆角，才能平滑过渡
    editable: true,
    strokeWidth: 30,
    strokeAlign: 'center',
    stroke: [ // [!code hl:6]
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush'
        }]
})

app.tree.add(rect)
```

### Path 元素

```ts
// #Stroke Brush [Path元素]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Path({
    path: 'M100 100L200 100 L300 200 L400 200L500 100',
    cornerRadius: 30, // 折线需带上圆角，才能平滑过渡
    editable: true,
    strokeWidth: 30,
    stroke: [ // [!code hl:6]
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
        }]
})

app.tree.add(line)
```

### 多条线段

```ts
// #Stroke Brush [多条线段]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Path({
    path: 'M100 100L150 100L200 230 L300 250 L400 230L500 100 M100 400L200 500L300 400',
    cornerRadius: 30, // 折线需带上圆角，才能平滑过渡
    editable: true,
    strokeWidth: 30,
    stroke: [ // [!code hl:6]
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
        }]
})

app.tree.add(line)
```

### 解散笔刷

```ts
// #Stroke Brush [解散笔刷]
import { App, Group, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)
import { ViewportLighter } from '@pxgrow/viewport-lighter' // 导入视图缩放加速插件 (建议，可选)

import { BrushImage, StrokeBrushHelper } from '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {})
new ViewportLighter(app.tree, { sliceRender: 1 })

const ellipse = new Ellipse({
    x: 100,
    y: 50,
    width: 200,
    height: 200,
    editable: true,
    strokeWidth: 30,
    strokeAlign: 'center',
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            gap: { x: 30 }
        }]
})

app.tree.add(ellipse)


// 解散笔刷成 BrushImage
setTimeout(() => {
    const geometryList = StrokeBrushHelper.ungroupGeometry(ellipse) // 解散笔刷成独立的几何数据  // [!code hl]

    const group = new Group({ x: 100, y: 300, hitChildren: false, editable: true })

    geometryList.forEach(item => {
        const brush = new BrushImage({ // [!code hl:6]
            points: item.vertices, // 几何顶点 [x1,y1,x2,y2...]
            uvs: item.uvs, // 几何uv贴图数据, 与顶点数据对应 [u1,v1,u2,v2...]
            editable: true,
            url: '/image/leafer.jpg'
        })
        group.add(brush)
    })

    app.tree.add(group)

}, 2000)
```

### bend 弯曲笔刷

```ts
// #Stroke Brush [bend 弯曲笔刷]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            bend: false // 是否弯曲笔刷，默认为true, 为 false 时，单个笔刷仅由4个顶点构成，设为 auto 时：表示长方形笔刷为 true, 非长方形为 false // [!code hl]
        }]
})

app.tree.add(line)
```

### fidelity 曲线分段精细度系数

```ts
// #Stroke Brush [fidelity 曲线分段精细度系数]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Line({
    points: [{ x: 100, y: 100 }, { x: 200, y: 230 }, { x: 300, y: 250 }, { x: 400, y: 230 }, { x: 500, y: 100 }],
    curve: true,
    editable: true,
    strokeWidth: 30,
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            fidelity: 4, // 曲线分段精细度系数，默认为1，设为4，基本就很平滑了，不过也会多消耗性能 // [!code hl]
        }]
})

app.tree.add(line)
```
