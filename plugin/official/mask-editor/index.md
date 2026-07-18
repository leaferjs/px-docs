<script setup>
import Case from '/component/Case.vue'
</script>

# Mask Editor

Mask Editor —— 轻松编辑图形遮罩。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10023) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-mask-editor-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-mask-editor-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-mask-editor-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-mask-editor-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-mask-editor-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/mask-editor": "file:pxgrow/pxgrow-mask-editor-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.maskEditor 访问插件内部功能。

需解压 `pxgrow-mask-editor-1.0.0-beta.tgz` 文件，复制 `package/dist/mask-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/mask-editor.js"></script>
<script>
  const { MaskEditTool } = PxGrow.maskEditor
</script>
```

:::

## 示例

### 编辑遮罩元素

```ts
// #Mask Editor [编辑遮罩元素]
import { App, Group, Ellipse, Rect, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/bright' // 导入突出显示元素插件

import '@pxgrow/mask-editor' // 导入遮罩编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        MaskEditTool: {
            bright: true, // 突出显示并置顶渲染遮罩元素 
            dimOthers: true, // 淡化其他元素

            // pointColor: 'green' // 遮罩控制点颜色
            // pointSize: 14, // 遮罩控制点控制点大小，默认为14
            // pointHeightScale: 0.3, // 遮罩控制点高度比例（相对pointSize), 默认为0.3
            // spread: 1, // 遮罩控制点与元素的间距

            // maskEditBox: { rect: { strokeWidth: 0 } } // 遮罩编辑框配置，可覆盖默认编辑器配置
        }
    }
})

const group = new Group({
    x: 100,
    y: 100,
    editable: true,
    hitChildren: false,
    editOuter: 'MaskEditTool' // 设置遮罩编辑工具 // [!code hl]
})

const mask = new Ellipse({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    editable: true,
    hitStroke: 'all',
    hitThrough: 'parent',  // 遮罩可穿透拾取 // [!code hl]
    mask: 'path'
})

const image = new Image({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    editable: true,
    url: '/image/leafer.jpg'
})

app.tree.add(group)

group.add([mask, image])

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 220, 300))


// 模拟双击进组，编辑遮罩元素
setTimeout(() => {
    app.editor.select(group)
    app.editor.openGroup(group)
    app.editor.select(mask)
}, 600)
```
