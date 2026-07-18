<script setup>
import Case from '/component/Case.vue'
</script>

# Ruler

Ruler —— 轻松实现标尺功能。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10025) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-ruler-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-ruler-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-ruler-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-ruler-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-ruler-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/ruler": "file:pxgrow/pxgrow-ruler-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.ruler 访问插件内部功能。

需解压 `pxgrow-ruler-1.0.0-beta.tgz` 文件，复制 `package/dist/ruler.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/ruler.js"></script>
<script>
  const { Ruler } = PxGrow.ruler
</script>
```

:::

## 示例

### 创建标尺

```ts
// #Ruler [标尺功能]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

// 标尺自动关联 tree 层，并将标尺添加到 sky 层 // [!code hl:8]
new Ruler(app, {
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
    // selectedColor: '#836DFF', // 选中元素的高亮坐标信息颜色
})
// const ruler = new Ruler(app.tree, {})
// app.sky.add(ruler)

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))
```
