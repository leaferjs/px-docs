<script setup>
import Case from '/component/Case.vue'
</script>

# PathEditor 类

轻松实现专业级路径创建与编辑体验，钢笔工具带回家。

::: tip 继承
PathEditor &nbsp;>&nbsp; [InnerEditor](https://www.leaferjs.com/ui/plugin/in/editor/InnerEditor.html)
:::

## 📆 更新日志

当前为 v1.1.2，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10009) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-path-editor-1.1.2.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-path-editor-1.1.2.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-path-editor-1.1.2.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-path-editor-1.1.2.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-path-editor-1.1.2.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/path-editor": "file:pxgrow/pxgrow-path-editor-1.1.2.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.pathEditor 访问插件内部功能。

需解压 `pxgrow-path-editor-1.1.2.tgz` 文件，复制 `package/dist/path-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/path-editor.js"></script>
<script>
  const { PathEditor } = PxGrow.pathEditor
</script>
```

:::

## 关键属性

### editTarget: [`UI`](https://www.leaferjs.com/ui/reference/display/UI.html)

当前编辑的目标元素。

### createMode: `IPathCreateMode`

当前是否为创建路径模式，可以主动设置。

```ts
// M^ 表示为 moveTo 状态， L^ 表示 lineTo 状态（连接上一个点 currentNode）
type IPathCreateMode = 'M^' | 'L^' | false
```

### reverseMode: `boolean`

当前是否为反向创建模式（只读），从 M 点逆向延伸。

### 节点属性

### nodesView: [`Group`](https://www.leaferjs.com/ui/reference/display/Group.html)

所有节点元素的容器（只读）。

### nodes: [`PathNode`](./PathNode.md)[]

所有节点元素列表（只读）， 等同于 nodesView.children。

### currentNode: [`PathNode`](./PathNode.md)

当前节点，刚创建的节点或单选的节点元素（只读）。

### tempNode: [`PathNode`](./PathNode.md)

创建模式下的 hover 临时连接点（只读）。

### 选中节点

### targetNode: [`PathNode`](./PathNode.md) | [`PathNode`](./PathNode.md)[]

当前单选、多选的节点元素。

### selectedNodes: [`PathNode`](./PathNode.md)[]

当前选中的节点元素列表（只读），未选中时为空数组。

### selectedNodeList: [`LeafList`](https://www.leaferjs.com/ui/reference/list/LeafList.html)

当前选中的节点元素列表对象（高性能列表，只读）， 未选中时为空列表对象。

### multiple: `boolean`

当前是否为多选节点状态（只读）。

### single: `boolean`

当前是否为单选节点状态（只读）。

### 配置属性（只读）

### userConfig: [`IClipEditorConfig`](./config/basic.md)

用户的配置。

### mergeConfig: [`IClipEditorConfig`](./config/basic.md)

实际使用的编辑器配置，实时合并编辑器的默认 config 与 userConfig，频繁访问会有性能开销。

### mergedConfig: [`IClipEditorConfig`](./config/basic.md)

mergeConfig 的缓存，频繁访问不会有性能问题。

## 关键方法

选中元素的情况下，可通过 `app.editor.innerEditor` 访问以下方法。

| 名称                                                                  | 描述                                                                                 |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 选择                                                                  |                                                                                      |
| [select()](/plugin/official/path-editor/PathEditor/select.md)         | 选中节点元素                                                                         |
| [cancel()](/plugin/official/path-editor/PathEditor/select.md)         | 取消选中节点元素                                                                     |
| [hasItem()](/plugin/official/path-editor/PathEditor/select.md)        | 是否已选中某个节点元素                                                               |
| [addItem()](/plugin/official/path-editor/PathEditor/select.md)        | 新增一个节点元素到选中列表                                                           |
| [removeItem()](/plugin/official/path-editor/PathEditor/select.md)     | 从选中列表中移出节点元素                                                             |
| 模式                                                                  |                                                                                      |
| [esc()](/plugin/official/path-editor/PathEditor/mode.md)              | 模拟快捷键逐步退出编辑功能                                                           |
| [cancelCreate()](/plugin/official/path-editor/PathEditor/mode.md)     | 取消创建状态                                                                         |
| [cancelHover()](/plugin/official/path-editor/PathEditor/mode.md)      | 取消显示临时 hover 线条                                                              |
| 添加节点                                                              |                                                                                      |
| [addNode()](/plugin/official/path-editor/PathEditor/addNode.md)       | 添加一个节点到末尾                                                                   |
| [addNodeBefore()](/plugin/official/path-editor/PathEditor/addNode.md) | 添加一个节点在指定节点元素的前面                                                     |
| [addNodeAfter()](/plugin/official/path-editor/PathEditor/addNode.md)  | 添加一个节点在指定节点元素的后面                                                     |
| [addNodeAt()](/plugin/official/path-editor/PathEditor/addNode.md)     | 添加一个节点在指定位置                                                               |
| 获取节点                                                              |                                                                                      |
| [getBeforeNode()](/plugin/official/path-editor/PathEditor/getNode.md) | 获取指定节点前的一个节点元素                                                         |
| [getAfterNode()](/plugin/official/path-editor/PathEditor/getNode.md)  | 获取指定节点后的一个节点元素                                                         |
| [getBeginNode()](/plugin/official/path-editor/PathEditor/getNode.md)  | 获取指定节点所在线条的起始点                                                         |
| [getEndNode()](/plugin/official/path-editor/PathEditor/getNode.md)    | 获取指定节点所在线条的最后节点                                                       |
| [isClosePath()](/plugin/official/path-editor/PathEditor/getNode.md)   | 当前指定节点所在的线条是否闭合                                                       |
| 节点操作                                                              |                                                                                      |
| [moveNode()](/plugin/official/path-editor/PathEditor/editNode.md)     | 移动当前选中的节点元素                                                               |
| [breakNode()](/plugin/official/path-editor/PathEditor/editNode.md)    | 断开节点，将线条断开                                                                 |
| [connectNode()](/plugin/official/path-editor/PathEditor/editNode.md)  | 连接两个断开的节点（焊接节点）                                                       |
| [mergeNode()](/plugin/official/path-editor/PathEditor/editNode.md)    | 合并连接两个断开的节点，会删除前面的一个节点                                         |
| [deleteNode()](/plugin/official/path-editor/PathEditor/editNode.md)   | 删除节点，支持多个                                                                   |
| 线段操作                                                              |                                                                                      |
| [getLineNodes()](/plugin/official/path-editor/PathEditor/line.md)     | 获取节点所在线条的所有节点列表                                                       |
| [spliceLineNodes()](/plugin/official/path-editor/PathEditor/line.md)  | splice 物理提取节点所在线条的所有节点列表                                            |
| [reverseLineNodes()](/plugin/official/path-editor/PathEditor/line.md) | 颠倒节点所在线条的所有节点前后顺序                                                   |
| [deleteLineNodes()](/plugin/official/path-editor/PathEditor/line.md)  | 删除节点所在线段的所有节点                                                           |
| 控制手柄                                                              |                                                                                      |
| [selectHandle()](/plugin/official/path-editor/PathEditor/handle.md)   | 选择当前节点元素的其中一个手柄                                                       |
| [cancelHandle()](/plugin/official/path-editor/PathEditor/handle.md)   | 取消选中元素手柄                                                                     |
| [setHandleType()](/plugin/official/path-editor/PathEditor/handle.md)  | 设置当前节点元素的 [手柄类型](./interface/PathCommandNodeData.md#pathnodehandletype) |
| [moveHandle()](/plugin/official/path-editor/PathEditor/handle.md)     | 移动当前选中的控制手柄                                                               |
| 更新                                                                  |                                                                                      |
| [updateEditor()](/plugin/official/path-editor/PathEditor/update.md)   | 更新路径编辑器                                                                       |
| [update()](/plugin/official/path-editor/PathEditor/update.md)         | 更新显示                                                                             |
| [updatePath()](/plugin/official/path-editor/PathEditor/update.md)     | 更新节点数据到元素 path 属性上                                                       |
| [loadPath()](/plugin/official/path-editor/PathEditor/update.md)       | 重写载入节点                                                                         |

## PathEditor 配置

### [基础](./config/basic.md) &nbsp; &nbsp; [事件](./config/event.md) &nbsp; &nbsp; [样式](./config/style.md)

## 相关事件

### [PathEditorEvent](/plugin/official/path-editor/event/PathEditorEvent.md)

### [PathEditorMoveEvent](/plugin/official/path-editor/event/PathEditorMoveEvent.md)

<!-- # 快捷键

按住 `Ctrl` / `Command` 键：

将光标移动至四条边上，拖动可倾斜元素。

将光标移动至控制点上，拖动可旋转元素。

按住 `Alt` 键 ：中心缩放 / 倾斜 （`Alt` + `Shift` 键可组合）。

按住 `Shift` 键：多选 / 固定比例缩放 / 固定方向移动 / 以对角为中心旋转。 -->

<!-- ## 自定义

可自定义快捷键： 通过监听 [键盘事件](/reference/event/ui/Key.md)，实时修改 [编辑器配置](/plugin/in/editor/config/base.md) 实现。 -->

## 示例

### 创建路径

```ts
// #Path Editor [创建路径]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            // autoClose: true, // 当路径首尾相连时是否自动闭合路径，默认为true
            // autoConnect: true, // 当点击路径首尾端点时，是否自动连接，默认为true
        }
    }
})

const path = new Path({ // 需要先创建一条空路径
    editable: true,
    // editInner: 'PathEditor', // 基础图形元素默认为 PathEditor 内部编辑器，可以不用设置 // [!code hl]
    stroke: 'black',
    scale: 5
})

app.tree.add(path)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击创建节点，按住拖拽可创建曲线，按 Del 可删除，按 ESC 可逐步退出，按 Ctrl 拖拽节点可转曲线', fill: '#999', fontSize: 16 })

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '创建模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = true } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '编辑模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = false } }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 编辑路径

```ts
// #Path Editor [编辑路径]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true, // 是否显示添加点（位于选中节点的两侧线段中间）
            editBox: { // 可临时覆盖editor配置， 多选配置同editor一致
                // boxSelect: false,  // 控制是否能框选节点
            }
        }
    }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 新增模式

```ts
// #Path Editor [新增模式]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    editable: true,
    stroke: 'black',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击可继续创建节点', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
    app.editor.getInnerEditor('PathEditor').createMode = true // 继续创建路径 // [!code hl]
    // app.editor.getInnerEditor('PathEditor').createMode = 'L^' // 连接最后节点，继续创建 
}, 600)
```

### 配置样式

```ts
// #Path Editor [配置样式]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            node: { fill: 'blue', stroke: 'white' }, // 节点样式
            beginNode: { fill: 'red', stroke: 'white' }, // 起始节点样式
            handle: { stroke: 'blue' }, // 手柄控制点样式
            editBox: { // 可临时覆盖editor配置
                stroke: 'gray' // 线条颜色
            }
        }
    }
})

const path = new Path({ // 需要先创建一条空路径
    editable: true,
    stroke: 'black',
    scale: 5
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击创建节点，按住拖拽可创建曲线，按 Del 可删除，按 ESC 可退出，按 Ctrl 拖拽节点可转曲线', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 自定义光标

```ts
// #Path Editor [自定义光标]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            cursor: 'crosshair', // 创建节点的光标，会临时设置给App实例的cursor属性
            // 后续会提供更精细化的节点操作光标样式配置
        }
    }
})

const path = new Path({ // 需要先创建一条空路径
    editable: true,
    stroke: 'black',
    scale: 5
})

app.tree.add(path)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击创建节点，按住拖拽可创建曲线，按 Del 可删除，按 ESC 可逐步退出，按 Ctrl 拖拽节点可转曲线', fill: '#999', fontSize: 16 })

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '创建模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = true } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '编辑模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = false } }
})

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 转换曲线手柄类型

```ts
// #Path Editor [转换曲线手柄类型]
import { App, Path, Text, PointerEvent, PathNodeHandleType } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { PathEditorEvent } from '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: { PathEditor: { beginNode: { stroke: 'red' } } }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: 'M30 30L50 100L80 30z',
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '曲线手柄', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '转为直线', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.none) } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '自由曲线', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.free) } }
})

app.sky.add({
    tag: 'Box', x: 215, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '镜像角度', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.mirrorAngle) } }
})

app.sky.add({
    tag: 'Box', x: 290, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '镜像角度和长度', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').setHandleType(PathNodeHandleType.mirror) } }
})



// 显示类型
const text = new Text({ x: 10, y: 70, text: '', fill: '#999' })
app.tree.add(text)


app.editor.on(PathEditorEvent.SELECT, (e: PathEditorEvent) => {
    const { pathEditor } = e
    if (pathEditor.currentNode) {

        const { nodeData } = pathEditor.currentNode
        let typeName: string
        switch (nodeData.ab) {
            case PathNodeHandleType.none:
                typeName = '直线'
                break
            case PathNodeHandleType.free:
                typeName = '自由曲线'
                break
            case PathNodeHandleType.mirrorAngle:
                typeName = '镜像角度'
                break
            case PathNodeHandleType.mirror:
                typeName = '镜像角度和长度'
                break
            default:
                typeName = pathEditor.currentNode.isCurveNode ? '镜像角度' : '直线'
        }

        text.text = '当前节点的控制手柄类型为：' + typeName

    } else {
        text.text = ''
    }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 隐藏曲线控制手柄

```ts
// #Path Editor [隐藏曲线控制手柄]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showHandle: false // 是否显示曲线控制手柄 // [!code hl]
        }
    }
})

const path = new Path({ // 需要先创建一条空路径
    editable: true,
    stroke: 'black',
    scale: 5
})

app.tree.add(path)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '点击创建节点，按住拖拽可创建曲线，按 Del 可删除，按 ESC 可逐步退出，按 Ctrl 拖拽节点可转曲线', fill: '#999', fontSize: 16 })

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '创建模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = true } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '编辑模式', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').createMode = false } }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 断开节点

```ts
// #Path Editor [断开节点]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    editable: true,
    stroke: 'black',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })

// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '断开节点', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').breakNode() } }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '连接节点', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').connectNode() } }
})


app.sky.add({
    tag: 'Box', x: 215, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '合并连接', padding: [5, 10] }],
    event: { 'pointer.down': (e: PointerEvent) => { e.stop(); app.editor.getInnerEditor('PathEditor').mergeNode() } }
})


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 节点坐标

```ts
// #Path Editor [节点坐标]
import { App, Path, PointerEvent, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import { PathEditorEvent, PathEditorMoveEvent } from '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '控制坐标', fill: '#999' })


// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '移动节点', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').selectHandle(null)
            app.editor.getInnerEditor('PathEditor').moveNode({ x: 0, y: 2 })
        }
    }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '移动手柄A', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').selectHandle('a')
            app.editor.getInnerEditor('PathEditor').moveHandle({ x: 0, y: 2 })
        }
    }
})

app.sky.add({
    tag: 'Box', x: 222, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '移动手柄B', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').selectHandle('b')
            app.editor.getInnerEditor('PathEditor').moveHandle({ x: 0, y: 2 })
        }
    }
})


// 显示坐标
const text = new Text({ x: 10, y: 80, text: '', fill: '#999' })
app.tree.add(text)


app.editor.on([PathEditorEvent.SELECT, PathEditorMoveEvent.MOVE], (e: PathEditorEvent) => {
    const { pathEditor } = e
    if (pathEditor.currentNode) {

        const { nodeData, selectedHandleName } = pathEditor.currentNode
        if (selectedHandleName) {
            const point = nodeData[selectedHandleName] // a | b
            text.text = `当前选中手柄 ${selectedHandleName}, 坐标为 x: ${Math.round(point.x)} y: ${Math.round(point.y)}`
        } else {
            text.text = `当前选中节点坐标 x: ${Math.round(nodeData.x)} y: ${Math.round(nodeData.y)}`
        }

    } else {
        text.text = ''
    }
})

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 路径节点对象

```ts
// #Path Editor [路径节点对象]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            // dataType: 'node' // 返回 path 的数据类型，默认为 auto，会自动根据原始数据判断。设为 node 表示节点对象，number 表示纯数字路径数据
        }
    }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: [ // 路径节点对象
        { name: "M^", x: 0, y: 90, b: { x: 10, y: 75 } }, // a 为节点前面的手柄，b 为节点后面的手柄
        { name: "C^", x: 20, y: 60, a: { x: 8.79, y: 62.8 }, b: { x: 28.79, y: 57.8 } },
        { name: "C^", x: 40, y: 80, a: { x: 32.25, y: 83.87 }, b: { x: 52.25, y: 73.87 } },
        { name: "C^", x: 60, y: 40, a: { x: 47.53, y: 50.69 }, b: { x: 65.03, y: 35.69 } },
        { name: "C^", x: 75.2, y: 50, a: { x: 70.75, y: 54.45 }, b: { x: 85.75, y: 39.45 } },
        { name: "C^", x: 90, y: 10, a: { x: 85.67, y: 3.07 }, b: { x: 98.17, y: 23.07 } },
        { name: "C^", x: 100, y: 90, a: { x: 95, y: 50 }, b: { x: 100, y: 90 } },
        { name: "Z^" }
    ],
    scale: 5
})

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 编辑路径时，固定背景图片

```ts
// #Path Editor [编辑路径时，固定背景图片]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    editable: true,
    stroke: 'black',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5,
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'clip', // 想要固定图片位置，需要设置为裁剪模式
        offset: { x: 200, y: 200 }, // 图片偏移位置，编辑路径过程中会动态修改
        clipSize: { width: 500, height: 400 } // 可用于拉伸图片: boxBounds / clipSize
    }
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 节点吸附

```ts
// #Path Editor [节点吸附]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: { // 可用于开发节点吸附功能
            beforeCreate(data) { // 创建前控制坐标吸附
                return { x: data.x + 20, y: data.y } // 修改待创建的节点坐标
                // return false // 阻止创建
            },
            beforeMove(data) { // 编辑时控制坐标吸附
                if (data.targetNode.nodeData.y + data.y < 20) return false  //拖动节点时，Y轴小于20px时不能继续拖动（inner坐标系）
                // return {x: data.x + 20, y: data.y } // 修改移动值
                return true
            },
        }
    }
})

const path = new Path({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '拖动节点时，Y轴小于20px时不能继续拖动', fill: '#999', fontSize: 16 })

app.tree.add(path)

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 模拟历史记录重写

```ts
// #Path Editor [模拟历史记录重写]
import { App, Path, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const path = new Path({
    editable: true,
    stroke: 'black',
    path: 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z',
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '操作按钮', fill: '#999' })


// 按钮， 可通过设置path来进行历史记录的前进与后退
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '回退数据', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            path.path = 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50'
        }
    }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '前进数据', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            path.path = 'M0 90C10 75 8.79 62.8 20 60 28.79 57.8 32.25 83.87 40 80 52.25 73.87 47.53 50.69 60 40 65.03 35.69 70.55 54.45 75 50 85.55 39.45 85.67 3.07 90 10 98.17 23.07 95 50 100 90 50 90 50 90 0 90z'
        }
    }
})

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 编辑 Rect 元素

```ts
// #Path Editor [编辑Rect元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 150,
    width: 60,
    height: 60,
    stroke: 'black',
    fill: '#32cd79',
    scale: 5,
    editable: true,
})

app.tree.add(rect)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)
```

### 编辑圆角 Rect 元素

```ts
// #Path Editor [编辑圆角Rect元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl:2]
import '@leafer-in/corner' // 导入圆角插件

const app = new App({
    view: window, editor: {
        PathEditor: {
            dataType: 'node', // 必须为 node 模式才能添加独立节点圆角 // [!code hl]
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 150,
    width: 60,
    height: 60,
    cornerRadius: [10, 20],
    stroke: 'black',
    fill: '#32cd79',
    scale: 5,
    editable: true
})

app.tree.add(rect)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)
```

### 编辑圆角 Line 元素

```ts
// #Path Editor [编辑圆角Line元素]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const line = new Line({
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90],
    cornerRadius: 5,
    editable: true,
    stroke: 'black',
    scale: 5
})

app.tree.add(line)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(line, true)
}, 600)
```

### 单独设置节点圆角

```ts
// #Path Editor [单独设置节点圆角]
import { App, PointerEvent, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl:2]
import '@leafer-in/corner' // 导入圆角插件

const app = new App({
    view: window, editor: {
        PathEditor: {
            dataType: 'node' // 必须为 node 模式才能添加节点圆角 // [!code hl]
        }
    }
})

const path = new Polygon({
    editable: true,
    stroke: 'black',
    fill: 'rgb(50,205,121)',
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90],
    scale: 5
})

app.tree.add(path)

app.sky.add({ tag: 'Text', x: 10, y: 10, text: '节点圆角', fill: '#999' })


// 按钮
app.sky.add({
    tag: 'Box', x: 65, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '增加圆角', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').setNodeRadius(5) // [!code hl]
        }
    }
})

app.sky.add({
    tag: 'Box', x: 140, y: 5, fill: '#32cd79', cornerRadius: 5, button: true, cursor: 'pointer',
    hoverStyle: { fill: '#FF4B4B' },
    children: [{ tag: 'Text', text: '移除圆角', padding: [5, 10] }],
    event: {
        'pointer.down': (e: PointerEvent) => {
            e.stop()
            app.editor.getInnerEditor('PathEditor').removeNodeRadius() // [!code hl]
        }
    }
})

// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(path, true)
}, 600)
```

### 编辑 Ellipse 元素

```ts
// #Path Editor [编辑Ellipse元素]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const ellipse = new Ellipse({
    x: 100,
    y: 150,
    width: 60,
    height: 60,
    endAngle: 330,
    stroke: 'black',
    fill: '#32cd79',
    scale: 5,
    editable: true,
})

app.tree.add(ellipse)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(ellipse, true)
}, 600)
```

### 编辑 Star 元素

```ts
// #Path Editor [编辑Star元素]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const star = new Star({
    x: 100,
    y: 150,
    corners: 5,
    stroke: 'black',
    fill: '#32cd79',
    scale: 5,
    editable: true,
})

app.tree.add(star)


app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(star, true)
}, 600)
```

### 编辑 Polygon 元素

```ts
// #Path Editor [编辑Polygon元素]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)

import '@pxgrow/path-editor' // 导入路径编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PathEditor: {
            showAddPoint: true // 是否显示添加点（位于选中节点的两侧线段中间）
        }
    }
})

const polygon = new Polygon({
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    editable: true,
    stroke: 'black',
    fill: '#32cd79',
    scale: 5
})

app.tree.add(polygon)

console.log(polygon.getPathString(true, true, 2)) // 导出SVG路径

app.tree.add({ tag: 'Text', x: 50, y: 100, text: '按Ctrl可单独拖拽一个手柄，按Ctrl拖拽直线节点可转曲线，按 Del 可删除节点，按 ESC 可退出编辑', fill: '#999', fontSize: 16 })


// 模拟双击元素打开路径编辑器
setTimeout(() => {
    app.editor.openInnerEditor(polygon, true)
}, 600)
```
