<script setup>
import Case from '/component/Case.vue'
</script>

# Flow Editor

Flow Editor —— 轻松编辑自动布局元素。

## 📆 更新日志

当前为 v1.0.0-alpha，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10027) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-flow-editor-1.0.0-alpha.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-flow-editor-1.0.0-alpha.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-flow-editor-1.0.0-alpha.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-flow-editor-1.0.0-alpha.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-flow-editor-1.0.0-alpha.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/flow-editor": "file:pxgrow/pxgrow-flow-editor-1.0.0-alpha.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.flowEditor 访问插件内部功能。

需解压 `pxgrow-flow-editor-1.0.0-alpha.tgz` 文件，复制 `package/dist/flow-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/flow-editor.js"></script>
<script>
  const { FlowEditTool } = PxGrow.flowEditor
</script>
```

:::

## 示例

### fitChildren 简便模式

```ts
// #Flow Editor [fitChildren 简便模式]
import { App, Frame, Box } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件 (可选)
import '@leafer-in/export' // 导入导出图片插件 (拖动自动布局元素时使用)
import { Flow } from '@leafer-in/flow' // 导入自动布局插件 

import '@pxgrow/flow-editor' // 导入自动布局编辑插件 // [!code hl]


const app = new App({
    view: window, editor: {
        bright: true, multipleSelect: false, boxSelect: false,
        FlowEditTool: { // 自动布局编辑配置
            insert: {
                // line: { stroke: 'blue' }, // 插入光标的线条 Line 样式
                // wrapLine: { stroke: 'red' }  // 将 进行 Flow 包裹时插入光标的线条 Line 样式
                // deepParent: true, // 靠近元素边缘时，是否查找更深层的父级, 默认为false
                allowWrapFlow: true // 是否允许创建 Flow 包裹，允许后，插入光标可出现在元素的四个方向上，默认为false
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
])

// 自动布局画板
const frame = new Frame(
    {
        flow: 'y', x: 150, y: 50, width: 400, height: 500,
        editFlowConfig: {
            fitChildren: true, // 编辑过程中，是否自动填满 x、y 轴剩余空间，可单独设置 x 或 y // [!code hl]
        },
        children: [
            // Header
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 100, padding: 10, gap: 5, children: [{ tag: 'Text', text: 'Header', fill: 'white' }] }),
            // Body
            new Flow({
                fill: 'white', editable: true, editFlowConfig: { fitChildren: true }, autoWidth: 1, autoHeight: 1, padding: 10, gap: 10,
                children: [
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { fitChildren: true }, autoHeight: 1, width: 150, padding: 5, gap: 5, children: [{ tag: 'Text', text: 'fitChildren = x + y', fill: 'white' }] }),
                    new Flow({ flow: 'y', fill: '#999', editable: true, editFlowConfig: { fitChildren: 'x' }, autoWidth: 1, autoHeight: 1, padding: 5, gap: 5, children: [{ tag: 'Text', text: 'fitChildren = x', fill: 'white' }] }),
                ],
            }),
            new Flow({ fill: '#666', editable: true, editFlowConfig: { fitChildren: 'y' }, autoWidth: 1, height: 100, padding: 5, gap: 5, children: [{ tag: 'Text', text: 'fitChildren = Y', fill: 'white' }] }),
            // Footer
            new Flow({ fill: 'black', editable: true, autoWidth: 1, height: 50, padding: 10, gap: 5, children: [{ tag: 'Text', text: 'Footer', fill: 'white', textAlign: 'center', verticalAlign: 'middle' }] }),
        ]
    })


app.tree.add(frame)


```
