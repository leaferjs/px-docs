<script setup>
import Case from '/component/Case.vue'
</script>

# Linker Editor

Linker Editor —— 可视化创建与编辑连线。

本插件依赖 [Linker 插件](../linker/index.md)、[Path Node 插件](../path-node/index.md)。

如需拖动连线上的文本，需使用 [Motion Editor 插件](../motion-editor/index.md)。

## 📆 更新日志

当前为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10015) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-linker-editor-1.0.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-linker-editor-1.0.0.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-linker-editor-1.0.0.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-linker-editor-1.0.0.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-linker-editor-1.0.0.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/linker-editor": "file:pxgrow/pxgrow-linker-editor-1.0.0.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.linkerEditor 访问插件内部功能。

需解压 `pxgrow-linker-editor-1.0.0.tgz` 文件，复制 `package/dist/linker-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/linker-editor.js"></script>
<script>
  const { LinkerEditTool } = PxGrow.linkerEditor
</script>
```

:::

## 示例

### 创建与编辑连线元素

```ts
// #Linker Editor [创建与编辑连线元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/state' // 导入交互状态插件

import { LinkerEditorEvent } from '@pxgrow/linker-editor' // 导入连线编辑插件  // [!code hl:2]
import { Linker } from '@leafer-in/linker' // 导入连线插件  
import { PathNodeEvent, PathNodeMoveEvent } from '@pxgrow/path-node' // 导入路径节点插件  

const app = new App({
    view: window, fill: '#FFF', editor: {
        // linkPoint: [{ fill: 'red' }, { visible: false }], // 连线的创建控制点样式，支持单独配置4个，或配置一个应用到所有
        //hideLinkPoints: false, // 是否隐藏创建点控制点
        LinkerEditTool: { // 连线编辑配置
            // point: {}, // 起点与终点的基础样式
            // startPoint: { stroke: 'red' }, // 起点样式
            // endPoint: {}, // 结束点样式
            // showAddPoint: false, // 是否显示添加点, 默认为 'all', 设为 'two' 或 true 时只显示 附近的两个添加点
            // node: {}, 途径节点样式
        }
    }
})

app.tree.cacheId = true // 创建时缓存元素id, 加快查找连线元素id的速度

const rect1 = Rect.one({
    id: 'rect1',
    editable: true,
    linkable: true, // 标记元素可进行连线，可设置 'start', 表示只能作为连线起点，或设置 'end' 表示只能作为连线终点 // [!code hl]
    fill: '#FEB027',
    cornerRadius: [20, 0, 0, 20]
}, 100, 100)

const rect2 = Rect.one({ id: 'rect2', editable: true, linkable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 100, 300)
const rect3 = Rect.one({ id: 'rect3', editable: true, linkable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 400, 200)

app.tree.add([rect1, rect2, rect3])


// 1. 监听全局事件, 自定义创建连线 

let linker: Linker

app.editor.on(LinkerEditorEvent.CREATE_START, (event: LinkerEditorEvent) => { // 开始创建
    linker = new Linker({
        startPoint: event.startPoint,
        editable: 'single', // 只允许单选
        endArrow: 'angle',
        stroke: '#9583f8',
        strokeWidth: 2,
        hittable: false // 创建过程中需暂时取消连线元素交互功能
    })
    app.tree.add(linker)
})

app.editor.on(LinkerEditorEvent.CREATE_DRAG, (e: LinkerEditorEvent) => { // 拖拽中
    linker.endPoint = linker.createEndPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

app.editor.on(LinkerEditorEvent.CREATE_END, () => { // 创建结束
    linker.hittable = true
})


// 2. 监听全局事件, 自定义编辑连线

app.editor.on(LinkerEditorEvent.CHANGE_START_POINT, (e: LinkerEditorEvent) => { // 拖拽中
    e.linker.startPoint = linker.createStartPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

app.editor.on(LinkerEditorEvent.CHANGE_END_POINT, (e: LinkerEditorEvent) => { // 拖拽中
    e.linker.endPoint = linker.createEndPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})


// 3.监听连线上的途径节点变化事件，用于记录历史
app.editor.on([PathNodeEvent.SELECT, PathNodeMoveEvent.MOVE], () => {

})

// 模拟点击元素，显示连线创建点
setTimeout(() => {
    app.editor.select(rect1)
}, 600)
```

### 在连线节点上双击添加文本

```ts
// #Linker Editor [在连线节点上双击添加文本]
import { App, Group, Rect, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/state' // 导入交互状态插件
import '@leafer-in/text-editor' // 导入文本编辑插件
import '@leafer-in/motion-path' // 导入运动路径插件

import { LinkerEditorEvent } from '@pxgrow/linker-editor' // 导入连线编辑插件  // [!code hl:3]
import { Linker } from '@leafer-in/linker' // 导入连线插件  
import '@pxgrow/motion-editor' // 导入运动编辑插件 

const app = new App({
    view: window, fill: '#FFF', editor: {
        LinkerEditTool: { // 连线编辑配置
            // addPoint: { opacity: 1, fill: '#836DFF', stroke: 'white' }, // 定义添加点样式
            editBox: {
                // hideOnMove: true, // 拖动节点时，隐藏节点
            }
        }
    }
})

app.tree.cacheId = true // 创建时缓存元素id, 加快查找连线元素id的速度

const rect1 = Rect.one({
    id: 'rect1',
    editable: true,
    linkable: true, // 标记元素可进行连线，可设置 'start', 表示只能作为连线起点，或设置 'end' 表示只能作为连线终点 // [!code hl]
    fill: '#FEB027',
    cornerRadius: [20, 0, 0, 20]
}, 100, 100)

const rect2 = Rect.one({ id: 'rect2', editable: true, linkable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 100, 300)
const rect3 = Rect.one({ id: 'rect3', editable: true, linkable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 400, 200)

app.tree.add([rect1, rect2, rect3])


// 监听全局事件, 在连线节点上双击添加文本  // [!code hl:16]
app.editor.on(LinkerEditorEvent.CREATE_TEXT, (e: LinkerEditorEvent) => {
    const selectedLinker = e.linker
    const motion = selectedLinker.getMotionNearPoint(selectedLinker.parent.getInnerPoint(e)) // 依赖 @pxgrow/motion-editor 插件

    const text = new Text({
        motion: { type: 'percent', value: motion / selectedLinker.getMotionTotal() }, // 运动距离
        motionAround: 'center',
        //motionRotation: false, // 是否跟随路径旋转
        boxStyle: { fill: '#fff' },
        editable: 'single', // 只允许单选
    })

    selectedLinker.parent.add(text)
    app.editor.openInnerEditor(text, true)
})


// 1. 监听全局事件, 自定义创建连线 

let linker: Linker

app.editor.on(LinkerEditorEvent.CREATE_START, (event: LinkerEditorEvent) => { // 开始创建
    linker = new Linker({
        startPoint: event.startPoint,
        editable: 'single', // 只允许单选
        endArrow: 'angle',
        stroke: '#9583f8',
        strokeWidth: 2,
        hittable: false // 创建过程中需暂时取消连线元素交互功能
    })

    // 连线必须被一个Group包裹，用来做运动路径的容器，注意！！！ // [!code hl:6]
    const group = new Group()
    group.add(linker)
    app.tree.add(group)

    linker.motionPath = true // 连线需标记为与运动路径，注意！！！ [!code hl]
})

app.editor.on(LinkerEditorEvent.CREATE_DRAG, (e: LinkerEditorEvent) => { // 拖拽中
    linker.endPoint = linker.createEndPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

app.editor.on(LinkerEditorEvent.CREATE_END, () => { // 创建结束
    linker.hittable = true
})


// 2. 监听全局事件, 自定义编辑连线

app.editor.on(LinkerEditorEvent.CHANGE_START_POINT, (e: LinkerEditorEvent) => { // 拖拽中
    e.linker.startPoint = linker.createStartPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

app.editor.on(LinkerEditorEvent.CHANGE_END_POINT, (e: LinkerEditorEvent) => { // 拖拽中
    e.linker.endPoint = linker.createEndPoint(e, e.target, {
        // 吸附模式
        // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
        // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
        // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
        // mode: 'free' // 可以吸附到元素内部
    })
})

// 模拟点击元素，显示连线创建点
setTimeout(() => {
    app.editor.select(rect1)
}, 600)
```
