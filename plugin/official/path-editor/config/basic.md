<script setup>
import Case from '/component/Case.vue'
</script>

# PathEditor 配置

### 基础 &nbsp; &nbsp; [事件](./event.md) &nbsp; &nbsp; [样式](./style.md)

## 关键属性

### autoClose: `boolean`

创建路径时，当路径首尾相连时是否自动闭合路径，默认为 true。

### autoConnect: `boolean`

创建路径时，是否自动连接路径的首尾端点、连接其他路径，默认为 true。

### showAddPoint: `boolean`

是否显示添加点（位于选中节点的两侧线段中间）

### showHandle: `boolean`

是否显示曲线控制手柄，默认为true。

### dataType: `'auto'` | `'node'` | `'number'`

操作后设置给元素的数据类型，　默认为 'auto'。

'node' 表示节点数组，'number' 表示纯数字路径数组。

'auto' 会自动根据原始数据判断，原始数据为节点数组时返回 'node' 类型。

### editBox: [`IEditorConfig`](https://www.leaferjs.com/ui/plugin/in/editor/config/base.html)

默认 [editor](https://www.leaferjs.com/ui/plugin/in/editor/) 的覆盖配置（仅在打开路径编辑器期间有效）, [多选配置](https://www.leaferjs.com/ui/plugin/in/editor/config/select.html#select-press-tap) 同 [editor](https://www.leaferjs.com/ui/plugin/in/editor/) 一致。

```ts
editBox: {
    // 多选节点配置
    select: 'press', // 点选的触发方式
    multipleSelect: true, // 是否启用多选功能
    boxSelect: true, // 是否启用框选功能
    continuousSelect: true,
    multipleSelectKey(event) { // 多选节点的快捷键钩子函数
        return event.shiftKey || event.ctrlKey // 默认为 shiftKey
    }
}
```

## 示例

### 编辑路径时显示添加点

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

### 返回数据类型

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
