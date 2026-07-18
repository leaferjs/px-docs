<script setup>
import Case from '/component/Case.vue'
</script>

# GradientEditor 类

渐变编辑工具，支持调用 `editor.openInnerEditor()` 进入渐变编辑模式。

::: tip 继承
GradientEditor &nbsp;>&nbsp; [InnerEditor](https://www.leaferjs.com/ui/plugin/in/editor/InnerEditor.html)
:::

## 📆 更新日志

当前为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10010) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-gradient-editor-1.0.1.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-gradient-editor-1.0.1.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-gradient-editor-1.0.1.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-gradient-editor-1.0.1.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-gradient-editor-1.0.1.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/gradient-editor": "file:pxgrow/pxgrow-gradient-editor-1.0.1.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.gradientEditor 访问插件内部功能。

需解压 `pxgrow-gradient-editor-1.0.1.tgz` 文件，复制 `package/dist/gradient-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/gradient-editor.js"></script>
<script>
  const { GradientEditor } = PxGrow.gradientEditor
</script>
```

:::

## 关键属性

### editTarget: [`UI`](https://www.leaferjs.com/ui/reference/display/UI.html)

当前编辑的目标元素。

### gradientTransformTool: [`TransformTool`](./TransformTool.md)

渐变框的变换操作工具，支持手动移动、旋转、调整大小。

## 显示属性

### gradientEditBox: [`EditBox`](https://www.leaferjs.com/ui/plugin/in/editor/EditBox.html)

渐变编辑框实例。

## 配置属性（只读）

### userConfig: [`IGradientEditorConfig`](./config/basic.md)

用户的配置。

### mergeConfig: [`IGradientEditorConfig`](./config/basic.md)

实际使用的编辑器配置，实时合并编辑器的默认 config 与 userConfig，频繁访问会有性能开销。

### mergedConfig: [`IGradientEditorConfig`](./config/basic.md)

mergeConfig 的缓存，频繁访问不会有性能问题。

## 关键方法

### getOffsetColor ( offset: `number` ): `string`

获取指定位置的颜色，offset取值范围 0～1。

### addColorStop ( offset: `number`, color?: `IColor`)

添加一个渐变色到指定位置， offset取值范围 0～1。

### selectColorStop ( index: `number`)

选中一个渐变色，index为渐变色的索引位置。

### sortColorStops ( )

排序渐变色。

### deleteColorStop( index?: `number`)

删除当前选中的渐变色，可指定需要删除的渐变色index索引。

### 更新

### updateEditor ( )

更新渐变编辑器，会卸载、再加载一次。

### update ( )

更新显示渐变框和图片的显示。

### updatePaint( updateColorStops?: `boolean` )

更新渐变paint对象， updateColorStops 表示是否更新渐变色。

## GradientEditor 配置

### [基础](./config/basic.md) &nbsp; &nbsp; [高级](./config/advanced.md)

## 示例

### 线性渐变

```ts
// #渐变编辑 [线性渐变]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/animate' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 // [!code hl]
    fill: {
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### 径向渐变

```ts
// #渐变编辑 [径向渐变]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 // [!code hl]
    fill: {
        type: 'radial', // 从中心 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### 角度渐变

```ts
// #渐变编辑 [角度渐变]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 // [!code hl]
    fill: {
        type: 'angular', // 从中心 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### 默认选中一个色标

```ts
// #渐变编辑 [默认选中一个色标]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 
    fill: {
        type: 'linear',
        stops: [
            '#FF4B4B',
            '#FEB027',
            { offset: 0.66, color: '#79CB4D', selected: true }, // 默认选中绿色 // [!code hl]
            '#FF4B4B'
        ]
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### 在多个 fill、stroke 中指定需要编辑的渐变对象

```ts
// #渐变编辑 [在多个 fill、stroke 中指定需要编辑的渐变对象]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    strokeWidth: 10,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 
    fill: {
        type: 'radial',
        stops: ['#FF4B4B', '#FEB027', '#FF4B4B'],

    },
    stroke: {
        type: 'linear',
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B'],
        editing: true, // 指定stroke为需要编辑渐变的对象 // [!code hl]
    },
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### 配置色块样式

```ts
// #渐变编辑 [配置色块样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/animate' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        GradientEditor: {
            colorBox: { // 配置色块样式 // [!code hl:4]
                cornerRadius: 0,
                selectedStyle: { y: -4, scaleX: 1.15, scaleY: 1.15, stroke: '#0d99ff' } // 选中样式
            },
            colorArrow: { // 配置色块箭头样式
                selectedStyle: { fill: '#0d99ff' } // 选中样式
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器
    fill: {
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### 配置渐变编辑框的控制点和线

```ts
// #渐变编辑 [配置渐变编辑框的控制点和线]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/animate' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        GradientEditor: {
            gradientEditBox: { // 配置渐变编辑框 // [!code hl:6]
                pointSize: 14,
                point: { fill: '#0d99ff', strokeWidth: 0, shadow: { x: 0, y: 0, blur: 5, color: 'rgba(0,0,0,0.3)' } }, // 控制点
                rect: { stroke: '#0d99ff', shadow: { x: 0, y: 0, blur: 5, color: 'rgba(0,0,0,0.2)' } }, // 控制线
            },
            colorBoxOffset: 6 // 颜色框偏移
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器
    fill: {
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```

### Path 元素

```ts
// #渐变编辑 [Path元素]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/gradient-editor' // 导入渐变编辑插件 

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    scale: 0.3,
    path: 'M945.344 586.304c-13.056-93.44-132.48-98.048-132.48-98.048 0-29.888-39.808-47.424-39.808-47.424L201.664 440.832c-36.736 0-42.112 51.264-42.112 51.264 7.68 288 181.44 382.976 181.44 382.976l299.456 0c42.88-31.36 101.888-122.56 101.888-122.56 9.216 3.072 72.768-0.832 97.984-6.144C865.6 740.992 958.336 679.68 945.344 586.304zM365.568 825.28c-145.472-105.664-130.944-328.576-130.944-328.576l80.448 0c-44.416 126.4 43.648 285.696 55.872 307.904C383.232 826.816 365.568 825.28 365.568 825.28zM833.472 694.272c-37.568 22.272-65.152 7.68-65.152 7.68 39.04-54.4 42.112-159.296 42.112-159.296 6.848 2.304 12.288-26.048 61.312 23.744C920.768 616.128 871.04 672.064 833.472 694.272z M351.68 129.856c0 0-119.424 72.832-44.416 140.928 75.008 68.16 68.16 93.44 24.512 153.216 0 0 81.92-41.344 71.168-104.192s-89.6-94.208-72.768-137.792C347.136 138.304 351.68 129.856 351.68 129.856z M615.232 91.648c0 0-119.488 72.832-44.352 140.928 74.944 68.16 68.032 93.44 24.448 153.216 0 0 81.984-41.344 71.232-104.192-10.688-62.784-89.6-94.208-72.832-137.792C610.624 100.032 615.232 91.648 615.232 91.648z M491.136 64c0 0-74.304 6.144-88.128 78.144C389.248 214.144 435.968 240.96 471.936 276.992 507.904 312.96 492.608 380.352 452.032 427.904c0 0 72.768-25.344 89.6-94.976 16.832-69.76-17.344-94.272-52.8-134.784C453.312 157.504 456.64 83.968 491.136 64z',
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器 
    fill: {
        type: 'radial', // 从中心 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#FF4B4B']
    }
})

app.tree.add(path)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```
