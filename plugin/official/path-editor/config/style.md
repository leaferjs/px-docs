<script setup>
import Case from '/component/Case.vue'
</script>

# PathEditor 配置

### [基础](./basic.md) &nbsp; &nbsp; [事件](./event.md) &nbsp; &nbsp; 样式

## 关键属性

<!-- ### stroke: `string`

描边颜色, 默认为 `#836DFF`。 -->

### node: [`IEllipseInputData`](https://www.leaferjs.com/ui/reference/display/Ellipse.html)

节点样式， 支持 [Ellipse](https://www.leaferjs.com/ui/reference/display/Ellipse.html) 元素的样式，包含 [hoverStyle](https://www.leaferjs.com/ui/reference/UI/state/hover.html)、[selectedStyle](https://www.leaferjs.com/ui/reference/UI/state/selected.html) 等状态样式。

### beginNode: [`IEllipseInputData`](https://www.leaferjs.com/ui/reference/display/Ellipse.html)

起始节点样式，支持 [Ellipse](https://www.leaferjs.com/ui/reference/display/Ellipse.html) 元素的样式，包含 [hoverStyle](https://www.leaferjs.com/ui/reference/UI/state/hover.html)、[selectedStyle](https://www.leaferjs.com/ui/reference/UI/state/selected.html) 等状态样式。

### handle: [IRectInputData](https://www.leaferjs.com/ui/reference/display/Rect.html)

控制手柄样式，，支持 [Rect](https://www.leaferjs.com/ui/reference/display/Rect.html) 元素的样式，包含 [hoverStyle](https://www.leaferjs.com/ui/reference/UI/state/hover.html)、[selectedStyle](https://www.leaferjs.com/ui/reference/UI/state/selected.html) 等状态样式。

### cursor?: [`ICursorType`](https://www.leaferjs.com/ui/reference/UI/cursor.html) | [`ICursorType`](https://www.leaferjs.com/ui/reference/UI/cursor.html)[]

创建路径的光标样式，支持元素的 [光标样式](https://www.leaferjs.com/ui/reference/UI/cursor.html)，包含图片、SVG 光标。

## 示例

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
