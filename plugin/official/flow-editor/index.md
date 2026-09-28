<script setup>
import Case from '/component/Case.vue'
</script>

# Flow Editor

Flow Editor —— 轻松编辑自动布局元素。

## 📆 更新日志

当前为 v1.0.0-beta.2，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10027) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-flow-editor-1.0.0-beta.2.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-flow-editor-1.0.0-beta.2.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-flow-editor-1.0.0-beta.2.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-flow-editor-1.0.0-beta.2.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-flow-editor-1.0.0-beta.2.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/flow-editor": "file:pxgrow/pxgrow-flow-editor-1.0.0-beta.2.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.flowEditor 访问插件内部功能。

需解压 `pxgrow-flow-editor-1.0.0-beta.2.tgz` 文件，复制 `package/dist/flow-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/flow-editor.js"></script>
<script>
  const { FlowEditTool } = PxGrow.flowEditor
</script>
```

:::

## 示例

### 移入移出、编辑自动布局元素

```ts
// #Flow Editor [移入移出、编辑自动布局元素]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, fill: '#333', editor: {
        bright: true,
        skipNested: true,
        FlowEditTool: { // 自动布局编辑配置
            insert: {
                // line: { stroke: 'blue' }, // 插入光标的线条 Line 样式
            }
        }
    },
})

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5 }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    }]
}))

// 显示选中元素宽高信息
const text = new Text({ x: 150, y: 50, text: '未选中元素', fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = '未选中元素'
}
```

### 沿自动布局的四个方向插入元素

```ts
// #Flow Editor [沿自动布局的四个方向插入元素]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, fill: '#333', editor: {
        bright: true,
        skipNested: true,
        FlowEditTool: { // 自动布局编辑配置
            insert: {
                // 沿自动布局的四个方向插入元素的配置，通过切分 Flow 实现 // [!code hl:13]
                // splitLine: { stroke: 'red' },  // 切分 Flow 插入光标的线条样式
                allowSplitFlow: true, // 是否允许切分 Flow，以达到在反向轴上插入元素（需在元素外面再包裹一个Flow），默认为 false
                createSplitFlow(data) { // 切分 Flow后，会创建一个外部包裹Flow, 可自定义（可选方法）
                    console.log('insert data', data)
                    return new Flow({
                        id: '12345',
                        editFlowConfig: {
                            insertFit: true,
                            isSplitFlow: true // 切分Flow的专属标识，子元素全部移出后，会自动销毁
                        }
                    })
                }
            }
        }
    },
})

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5 }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    }]
}))

// 显示选中元素宽高信息
const emptyText = '编辑器配置 FlowEditTool.insert.allowSplitFlow 为 true, 可沿自动布局的四个方向插入元素'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = emptyText
}
```

### 阻止插入子元素

```ts
// #Flow Editor [阻止插入子元素]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({ view: window, fill: '#333', editor: { bright: true, skipNested: true }, })

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({
                        flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5,
                        editFlowConfig: {
                            insertable: false // 编辑过程中是否允许插入子元素，设为 false 表示阻止，默认为true  // [!code hl]
                        },
                        children: [{ tag: 'Text', editable: true, text: 'insertable = false', fill: 'white' }]
                    }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertable = true', fill: 'white' }] }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    }]
}))

// 显示选中元素宽高信息
const emptyText = '容器元素设置 editFlowConfig.insertable 为 false, 可阻止插入子元素'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')' + ', zIndx：' + element.zIndex
    else text.text = emptyText
}
```

### beforeInsert 事件钩子

```ts
// #Flow Editor [beforeInsert 事件钩子]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, fill: '#333', editor: {
        bright: true,
        skipNested: true,
        FlowEditTool: { // 自动布局编辑配置
            insert: {
                beforeInsert(data) { // 插入元素前的事件钩子  // [!code hl:20]
                    const { target, points, insertType, splitFlow, event } = data

                    console.log(
                        target, // 插入的参考对象，可能为空
                        points, // 插入光标的位置
                        insertType, // 插入类型，before: 插入target前面，after: 插入到target后面，child：插入为target子元素
                        splitFlow, // 是否切分Flow, x: 表示切分x轴，y: 表示切分y轴
                        event // 原生的 DragEvent 事件，带事件坐标信息
                    )

                    if (target && (target.fill === '#888' || (target as Text).text === '阻止事件')) {
                        return false // 返回 false 将阻止插入元素
                    } else if (target) {
                        // 可修改 data 数据后返回
                    }

                    return true
                }
            }
        }
    },
})

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#888', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: '阻止事件', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    }]
}))

// 显示选中元素宽高信息
const text = new Text({ x: 150, y: 50, text: '未选中元素', fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = '未选中元素'
}
```

### 从DOM中拖入元素

```ts
// #Flow Editor [从DOM中拖入元素]
import { App, Frame, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import { IEditBoxWidget } from '@leafer-in/interface'

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


// 创建可拖拽的 dom 图形（圆形、矩形）
document.body.innerHTML = `
<div id="circle" draggable="true" style="width: 50px; height: 50px; border-radius: 25px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="rect" draggable="true" style="width: 50px; height: 50px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="leafer" style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0;"></div>
`

const app = new App({ view: 'leafer', fill: '#333', editor: { bright: true, skipNested: true }, })

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 50, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5 }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


app.tree.add({ tag: 'Text', x: 50, y: 40, text: '可拖拽上方DOM图形到里面', fill: '#999', fontSize: 16 })


// 设置拖拽数据
const flowWidget = app.editor.editBox.getWidget('FlowWidget') as IEditBoxWidget

document.getElementById('rect').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'rect')
})

document.getElementById('circle').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'circle')
})


// 让画布可以接收拖拽内容
document.getElementById('leafer').addEventListener('dragover', function (e) {
    e.preventDefault()
    const point = app.getPagePointByClient(e) // 浏览器原生事件的 client 坐标 转 应用的 page 坐标  
    flowWidget.onMove(point as any)
})

// 拖拽释放，创建相应图形
document.getElementById('leafer').addEventListener('drop', function (e) {
    const type = e.dataTransfer.getData("type")
    const point = app.getPagePointByClient(e) // 浏览器原生事件的 client 坐标 转 应用的 page 坐标  

    let element: Rect | Ellipse
    if (type === 'rect') {
        element = Rect.one({ fill: '#32cd79', editable: true }, point.x, point.y)
    } else if (type === 'circle') {
        element = Ellipse.one({ fill: '#32cd79', editable: true }, point.x, point.y)
    }

    app.tree.add(element)
    app.editor.target = element
    flowWidget.onMoveEnd(point as any)
})


```

### 切换自动布局与自由移动模式

```ts
// #Flow Editor [元素切换自动布局与自由移动模式]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({ view: window, fill: '#333', editor: { bright: true, skipNested: true }, })

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

const block = new Box({
    fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50,
    inFlow: false // 是否参与自动布局，设为false, 表示不参与，可以在自动布局元素中自由移动  // [!code hl]
})

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [block] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [
        {
            tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
            hoverStyle: { fill: '#FF4B4B' },
            children: [{ tag: 'Text', text: '自动布局', padding: [5, 10] }],
            event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.inFlow = true; updateInfo() } } }
        }, {
            tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
            hoverStyle: { fill: '#FF4B4B' },
            children: [{ tag: 'Text', text: '自由移动', padding: [5, 10] }],
            event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.inFlow = false; editor.toTop(); updateInfo() } } }
        },
    ]
}))

// 显示选中元素宽高信息
const emptyText = '元素设置 inFlow 为 false, 可自由移动'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag.end'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) {
        const inflow = element.parent.flow && element.inFlow
        text.text = '选中元素 inFlow = ' + (inflow ? 'true' : 'false') + ', 表示元素' + (inflow ? '可 自动布局' : '可 自由移动')
    } else text.text = emptyText
}

editor.select(block)
```

### 插入子元素时，自动填满空间

```ts
// #Flow Editor [插入子元素时，自动填满空间]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({ view: window, fill: '#333', editor: { bright: true, skipNested: true }, })

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        editFlowConfig: {
            insertFit: true, // 插入子元素时，是否自动填满满 x、y 轴剩余空间，可单独设置 x 或 y // [!code hl]
        },
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, editFlowConfig: { insertFit: true }, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: true }, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x + y', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: 'x' }, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x', fill: 'white' }] }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, editFlowConfig: { insertFit: 'y' }, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = Y', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    }]
}))

// 显示选中元素宽高信息
const emptyText = '容器元素设置 editFlowConfig.insertFit 为 true, 插入子元素时会自动填满 x、y 轴剩余空间'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = emptyText
}
```

### 同步 resize 关联元素

```ts
// #Flow Editor [同步 resize 关联元素]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, fill: '#333', editor: {
        bright: true,
        skipNested: true,
        FlowEditTool: { // 自动布局编辑配置
            syncResize: true  // 是否同步resize上下、父级元素 // [!code hl]
        }
    },
})

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        editFlowConfig: {
            insertFit: true, // 编辑过程中，是否强制自动填满 x、y 轴剩余空间，可单独设置 x 或 y // [!code hl]
        },
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, editFlowConfig: { insertFit: true }, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: true }, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x + y', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: 'x' }, width: 100, autoHeight: 1, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, editFlowConfig: { insertFit: 'y' }, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = Y', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为固定宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = undefined; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为固定高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = undefined; updateInfo() } } }
    },
    ]
}))

// 显示选中元素宽高信息
const emptyText = '自动宽高的元素会同步 resize 相关联元素，设为固定宽高可取消关联'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = emptyText
}
```

### 阻止同步 resize

```ts
// #Flow Editor [阻止同步 resize 向上传递]
import { App, Frame, Box, Text, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, fill: '#333', editor: {
        bright: true,
        skipNested: true,
        FlowEditTool: { // 自动布局编辑配置
            syncResize: true  // 是否同步resize上下、父级元素 // [!code hl]
        }
    },
})

// 外部可拖动方块
app.tree.add([
    { tag: 'Text', x: 50, y: 50, text: '可拖入方块', fill: 'white' },
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 100, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 200, width: 50, height: 50 }),
    new Box({ fill: '#79CB4D', editable: true, x: 50, y: 300, width: 50, height: 50 }),
    new Box({ fill: '#FF4B4B', editable: true, x: 50, y: 400, width: 50, height: 50 }),
    new Box({ fill: '#FEB027', editable: true, x: 50, y: 500, width: 50, height: 50 }),
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', editable: true, stroke: '#0008', strokeWidth: 10, strokeAlign: 'outside', x: 150, y: 90, width: 400, height: 500,
        editFlowConfig: {
            syncResize: false, // 阻止同步 resize 向上传递 // [!code hl]
            insertFit: true, // 编辑过程中，是否强制自动填满 x、y 轴剩余空间，可单独设置 x 或 y 
        },
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, editFlowConfig: { insertFit: true }, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: true }, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x + y', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { insertFit: 'x' }, width: 100, autoHeight: 1, padding: 5, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = x', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5 }),
                ],
            }),
            // Footer
            new Flow({ fill: 'black', editable: true, editFlowConfig: { insertFit: 'y' }, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', editable: true, text: 'insertFit = Y', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })

app.tree.add(frame)


// 操作按钮
const { editor } = app

app.sky.add(new Flow({
    x: 150, y: 10, gap: 10,
    children: [{
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为自动高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = 1; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为固定宽度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoWidth = undefined; updateInfo() } } }
    },
    {
        tag: 'Box', fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
        hoverStyle: { fill: '#FF4B4B' },
        children: [{ tag: 'Text', text: '设为固定高度', padding: [5, 10] }],
        event: { 'pointer.down': (e: PointerEvent) => { e.stop(); if (editor.element) { editor.element.autoHeight = undefined; updateInfo() } } }
    },
    ]
}))

// 显示选中元素宽高信息
const emptyText = '画板设置 editFlowConfig.syncResize 为 false, 可阻止同步 resize 向上传递'

const text = new Text({ x: 150, y: 50, text: emptyText, fill: '#999' })
app.tree.add(text)

editor.on(['editor.select', 'drag'], updateInfo)

function updateInfo() {
    const { element } = editor
    if (element) text.text = '选中元素 width：' + Math.round(element.width) + 'px (' + (element.autoWidth ? '自动宽度' : '固定宽度') + '),   height：' + Math.round(element.height) + 'px (' + (element.autoHeight ? '自动高度' : '固定高度') + ')'
    else text.text = emptyText
}
```
