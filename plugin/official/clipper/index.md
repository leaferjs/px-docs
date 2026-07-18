<script setup>
import Case from '/component/Case.vue'
</script>

# ClipEditor 类

图片裁剪工具，支持双击元素或调用 `editor.openInnerEditor()` 进入裁剪模式。

::: tip 继承
ClipEditor &nbsp;>&nbsp; [InnerEditor](https://www.leaferjs.com/ui/plugin/in/editor/InnerEditor.html)
:::

## 📆 更新日志

当前为 v1.1.0，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10000) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-clipper-1.1.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-clipper-1.1.0.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-clipper-1.1.0.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-clipper-1.1.0.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-clipper-1.1.0.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/clipper": "file:pxgrow/pxgrow-clipper-1.1.0.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.clipper 访问插件内部功能。

需解压 `pxgrow-clipper-1.1.0.tgz` 文件，复制 `package/dist/clipper.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/clipper.js"></script>
<script>
  const { ClipEditor } = PxGrow.clipper
</script>
```

:::

## 关键属性

### editTarget: [`UI`](https://www.leaferjs.com/ui/reference/display/UI.html)

当前编辑的目标元素。

### clipTransformTool: [`TransformTool`](./TransformTool.md)

裁剪框的变换操作工具，支持手动移动、旋转、调整大小。

### imageTransformTool: [`TransformTool`](./TransformTool.md)

图片框的变换操作工具，支持手动移动、旋转、调整大小。

## 显示属性

### clipEditBox: [`EditBox`](https://www.leaferjs.com/ui/plugin/in/editor/EditBox.html)

裁剪框实例，用于裁剪图片。

### imageEditBox: [`EditBox`](https://www.leaferjs.com/ui/plugin/in/editor/EditBox.html)

图片框实例，用于控制图片对象。

### imageTarget: [`Image`](https://www.leaferjs.com/ui/reference/display/Image.html)

完整显示的图片对象。

<!-- ### horizontalLines: [`Group`](https://www.leaferjs.com/ui/reference/display/Group.html)[]

x 轴和 y 轴的水平线。 -->

## 配置属性（只读）

### userConfig: [`IClipEditorConfig`](./config/basic.md)

用户的配置。

### mergeConfig: [`IClipEditorConfig`](./config/basic.md)

实际使用的编辑器配置，实时合并编辑器的默认 config 与 userConfig，频繁访问会有性能开销。

### mergedConfig: [`IClipEditorConfig`](./config/basic.md)

mergeConfig 的缓存，频繁访问不会有性能问题。

## 关键方法

### updateEditor ( )

更新裁剪编辑器，会卸载、再加载一次。

### update ( )

更新显示裁剪框和图片的显示。

### updateImage ( )

仅更新图片。

### updateImagePaint ( )

仅更新图片填充对象。

## ClipEditor 配置

### [基础](./config/basic.md) &nbsp; &nbsp; [高级](./config/advanced.md)

## 示例

### 默认效果

```ts
// #Clipper [自由裁剪]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器 // [!code hl]
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 快速修改裁剪控制点大小

```ts
// #Clipper [快速修改裁剪控制点大小]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 配置裁剪编辑器
            pointSize: 16, // 裁剪控制点大小 // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 快速修改裁剪控制点颜色

```ts
// #Clipper [快速修改裁剪控制点颜色]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 配置裁剪编辑器
            pointColor: '#0d99ff', // 裁剪控制点颜色 // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})
```

### 图片只能在有效范围内拖动、裁剪（暂不支持同时旋转、倾斜图片，限制效果会有误差，后续会支持）

```ts
// #Clipper [图片只能在有效范围内拖动、裁剪（暂不支持同时旋转、倾斜图片，限制效果会有误差，后续会支持）]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        dragLimitAnimate: true,
        rotateable: false, // 关闭图片旋转、倾斜功能
        skewable: false,
        ClipEditor: { // 配置裁剪编辑器
            dragLimit: true // 图片在裁剪框的有限范围内拖动，默认为false  // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 手势控制图片

```ts
// #Clipper [手势控制图片]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window,
    mobile: true, // 支持手机端体验优化
    editor: {
        moveable: 'gesture', // 手势控制图片
        resizeable: 'gesture',
        rotateable: 'gesture',
        ClipEditor: { // 配置裁剪编辑器
            clipEditBox: { // [!code hl:5]
                moveable: true, // 裁剪框不进行手势控制，防止与手势操作图片冲突
                resizeable: true,
                rotateable: true,
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 旋转原始图片时，围绕裁剪框中心旋转

```ts
// #Clipper [围绕裁剪框中心旋转]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件  // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 配置裁剪编辑器
            aroundClipBox: true // 图片是否围绕裁剪框中心旋转，默认为false   // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

// setTimeout(() => app.editor.config.ClipEditor.aroundClipBox = false, 10000)

```

### 显示九宫格水平线

```ts
// #Clipper [显示水平线]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 配置裁剪编辑器
            horizontalLine: true  // 显示水平线 // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 仅在操作时显示水平线

```ts
// #Clipper [仅在操作时显示水平线]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 配置裁剪编辑器
            horizontalLine: { hideOnActionEnd: true } // 仅在resize操作时显示水平线 // [!code hl]
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 在多个 fill、stroke 中指定需要裁剪的图片填充对象

```ts
// #Clipper [在多个 fill、stroke 中指定需要裁剪的图片填充对象]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    strokeWidth: 10,
    fill: {
        type: 'image',
        url: '/image/arrows.png',
        mode: 'stretch',
    },
    stroke: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
        editing: true // 指定stroke为需要裁剪的图片填充对象 // [!code hl]
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 移动裁剪框，拖拽裁剪框的边缘可移动裁剪框

```ts
// #Clipper [可移动的裁剪框]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: {
            clipEditBox: {
                moveable: true, // 裁剪框可移动 // [!code hl:2]
                resizeLine: { pointType: 'move' }, // 拖拽裁剪框的边缘可移动裁剪框， 将裁剪框的透明边缘控制线转为移动功能 
                //  moveCursor: 'grab', // 可自定义移动光标（参考编辑器的moveCursor配置）
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 突出显示并置顶渲染裁剪元素，淡化其他元素

```ts
// #Clipper [突出显示并置顶渲染裁剪元素，淡化其他元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/bright' // 导入突出显示元素插件 // [!code hl:2]
import '@pxgrow/clipper' // 导入图片裁剪插件 

const app = new App({
    view: window, ground: {}, editor: {
        ClipEditor: {
            editBox: {
                bright: true, // 突出显示并置顶渲染裁剪元素 // [!code hl:2]
                dimOthers: true, // 淡化其他元素
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 350))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 220, 350))

// // 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 自定义复杂样式

```ts
// #Clipper [自定义复杂样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {
        ClipEditor: { // 图片裁剪配置 // [!code hl:29]
            imageEditBox: { strokeWidth: 1, rect: { stroke: 'black', dashPattern: [4, 2] } }, // 模拟图片的编辑框，支持配置编辑器样式
            clipEditBox: { // 裁剪编辑框，支持配置编辑器样式
                stroke: 'white',
                point: {
                    strokeWidth: 0,
                    shadow: {
                        x: 1,
                        y: 1,
                        blur: 6,
                        color: '#00000030'
                    }
                },
                middlePoint: {
                    width: 16, height: 6, cornerRadius: 3,
                    strokeWidth: 0,
                    shadow: {
                        x: 1,
                        y: 1,
                        blur: 6,
                        color: '#00000030'
                    }
                },
                rect: {
                    stroke: 'black',
                    strokeWidth: 2, // 裁剪框默认没有描边宽度，需加上
                },
                spread: 0 // 裁剪框默认扩展了一定的大小，设置0可还原
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'clip',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

// 访问裁剪编辑器实例（仅裁剪编辑器打开的情况下有效）
// const clipEditor = app.editor.innerEditor 
```

### 裁剪 Image 元素

```ts
// #Clipper [裁剪 Image 元素]
import { App, Image } from 'leafer-ui'
import { InnerEditorEvent } from '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Image({
    x: 100,
    y: 100,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器 // [!code hl]
    url: '/image/leafer.jpg'
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

// 裁剪Image完成后，json数据会保留fill字段，并移除url字段
app.editor.on(InnerEditorEvent.CLOSE, () => {
    console.log(rect.toJSON()) // [!code hl]
})
```

### 裁剪 Line 元素

```ts
// #Clipper [裁剪 Line 元素]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Line({
    x: 300,
    y: 300,
    points: [0, 0, -46, -23, -127, -4, -201, 69, -221, 218, 69, 79, 56],
    closed: true,
    stroke: '#32cd79',
    strokeWidth: 5,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```

### 裁剪 Path 元素

```ts
// #Clipper [裁剪 Path 元素]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/clipper' // 导入图片裁剪插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Path({
    x: 100,
    y: 100,
    scale: 0.2,
    path: 'M945.344 586.304c-13.056-93.44-132.48-98.048-132.48-98.048 0-29.888-39.808-47.424-39.808-47.424L201.664 440.832c-36.736 0-42.112 51.264-42.112 51.264 7.68 288 181.44 382.976 181.44 382.976l299.456 0c42.88-31.36 101.888-122.56 101.888-122.56 9.216 3.072 72.768-0.832 97.984-6.144C865.6 740.992 958.336 679.68 945.344 586.304zM365.568 825.28c-145.472-105.664-130.944-328.576-130.944-328.576l80.448 0c-44.416 126.4 43.648 285.696 55.872 307.904C383.232 826.816 365.568 825.28 365.568 825.28zM833.472 694.272c-37.568 22.272-65.152 7.68-65.152 7.68 39.04-54.4 42.112-159.296 42.112-159.296 6.848 2.304 12.288-26.048 61.312 23.744C920.768 616.128 871.04 672.064 833.472 694.272z M351.68 129.856c0 0-119.424 72.832-44.416 140.928 75.008 68.16 68.16 93.44 24.512 153.216 0 0 81.92-41.344 71.168-104.192s-89.6-94.208-72.768-137.792C347.136 138.304 351.68 129.856 351.68 129.856z M615.232 91.648c0 0-119.488 72.832-44.352 140.928 74.944 68.16 68.032 93.44 24.448 153.216 0 0 81.984-41.344 71.232-104.192-10.688-62.784-89.6-94.208-72.832-137.792C610.624 100.032 615.232 91.648 615.232 91.648z M491.136 64c0 0-74.304 6.144-88.128 78.144C389.248 214.144 435.968 240.96 471.936 276.992 507.904 312.96 492.608 380.352 452.032 427.904c0 0 72.768-25.344 89.6-94.976 16.832-69.76-17.344-94.272-52.8-134.784C453.312 157.504 456.64 83.968 491.136 64z',
    stroke: '#32cd79',
    strokeWidth: 5,
    editable: true,
    editInner: 'ClipEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch',
    }
})

app.tree.add(rect)

// 模拟双击元素打开裁剪编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

```
