# PathEditorMoveEvent

节点、手柄的移动事件，通过 `app.editor.on()` 监听。

编辑器可通过配置 [beforeMove](/plugin/official/path-editor/config/event.md#beforemove-ipatheditorbeforemove) 钩子改变节点移动数据。

## 事件属性

### moveType: `'node'` | `'handle'`

当前移动的类型，node 为节点，handle 为手柄。

### moveX: `number`

X 轴移动距离（[box 坐标](https://www.leaferjs.com/ui/guide/advanced/coordinate.html#box-%E5%9D%90%E6%A0%87%E7%B3%BB)）

### moveY: `number`

Y 轴移动距离（[box 坐标](https://www.leaferjs.com/ui/guide/advanced/coordinate.html#box-%E5%9D%90%E6%A0%87%E7%B3%BB)）

## 事件名称

### PathEditorMoveEvent.BEFORE_MOVE

before 移动节点事件。

`editor.before_move`

### PathEditorMoveEvent.MOVE

移动节点事件。

`editor.move`

## 继承事件

### [Event](https://www.leaferjs.com/ui/reference/event/basic/Event.html)

## 示例

### 监听移动事件更新坐标信息

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
