<script setup>
import Case from '/component/Case.vue'
</script>

# Points Editor

Points Editor —— 轻松编辑图形节点。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10021) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-points-editor-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-points-editor-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-points-editor-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-points-editor-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-points-editor-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/points-editor": "file:pxgrow/pxgrow-points-editor-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.pointsEditor 访问插件内部功能。

需解压 `pxgrow-points-editor-1.0.0-beta.tgz` 文件，复制 `package/dist/points-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/points-editor.js"></script>
<script>
  const { PointsEditTool } = PxGrow.pointsEditor
</script>
```

:::

## 示例

### Line 元素

```ts
// #Points Editor [Line 元素]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            // pathEditable: false // 是否可编辑带path属性的元素， 默认为 false
            // showAddPoint: false // 是否显示添加点（位于选中节点的两侧线段中间）, 默认为 false
            // point: {} // 控制点样式
            // beginPoint: {} // 起始控制点样式
        }
    }
})

const line = new Line({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    strokeWidth: 5,
    strokeJoin: 'round',
    stroke: "#32cd79",
    // editOuter: 'PointsEditTool', // 带 points 属性的元素默认为 PointsEditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(line)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(line)
}, 600)

```

### Line 曲线

```ts
// #Points Editor [Line 曲线]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入视口插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            showAddPoint: true // 显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const line = new Line({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    curve: 0.4,
    strokeWidth: 5,
    stroke: "#32cd79",
    editable: true
})

app.tree.add(line)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(line)
}, 600)

```

### 隐藏编辑框

```ts
// #Points Editor [隐藏编辑框]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置  // [!code hl:6]
            editBox: {
                editBox: false, // 隐藏编辑框
                moveable: false // 是否能移动编辑框
            }
        }
    }
})

const line = new Line({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    strokeWidth: 5,
    strokeJoin: 'round',
    stroke: "#32cd79",
    editable: true
})

app.tree.add(line)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(line)
}, 600)

```

### Polygon 元素

```ts
// #Points Editor [Polygon 元素]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            showAddPoint: true // 显示添加点
        }
    }
})

const polygon = new Polygon({
    x: 100,
    y: 100,
    points: [0, 270, 60, 180, 120, 240, 180, 120, 225, 150, 270, 30, 300, 270],
    strokeWidth: 5,
    strokeJoin: 'round',
    fill: "#32cd79",
    stroke: "#000",
    // editOuter: 'PointsEditTool', // 带 points 属性的元素默认为 PointsEditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(polygon)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(polygon)
}, 600)

```

### 编辑带 path 属性的元素

```ts
// #Points Editor [编辑带 path 属性的元素]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/points-editor'  // 导入节点编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PointsEditTool: { // 编辑工具配置
            pathEditable: true, // 启用编辑带 path 属性的元素  // [!code hl]
            showAddPoint: true // 显示添加点（
        }
    }
})

const path = new Path({
    x: 100,
    y: 100,
    path: 'M30 270C8.96 120.52 8.96 40.52 30 30 58.44 15.78 90 210 150 210 210 210 241.56 15.78 270 30 291.04 40.52 291.04 120.52 270 270',
    strokeWidth: 5,
    stroke: "#32cd79",
    // editOuter: 'PointsEditTool', // 带 path 属性的元素默认为 PointsEditTool ，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(path)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(path)
}, 600)

```
