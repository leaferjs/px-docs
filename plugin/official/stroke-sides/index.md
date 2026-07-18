<script setup>
import Case from '/component/Case.vue'
</script>

# Stroke Sides

轻松实现矩形四边独立控制。

## 更新日志

当前版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10018) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `leafer-in-stroke-sides-1.0.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-stroke-sides-1.0.0.tgz

```

```sh [pnpm]
pnpm add ./leafer/leafer-in-stroke-sides-1.0.0.tgz

```

```sh [yarn]
yarn add ./leafer/leafer-in-stroke-sides-1.0.0.tgz

```

```sh [bun]
bun add ./leafer/leafer-in-stroke-sides-1.0.0.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer-in/stroke-sides": "file:leafer/leafer-in-stroke-sides-1.0.0.tgz"`

---

或通过 script 标签引入，使用全局变量 LeaferIN.strokeSides 访问插件内部功能。

解压 `leafer-in-stroke-sides-1.0.0.tgz` ，复制 `package/dist/stroke-sides.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/stroke-sides.js"></script>
<script>
  const {} = LeaferIN.strokeSides
</script>
```

:::

## 边框属性

[Rect](https://www.leaferjs.com/ui/reference/display/Rect.html)、[Box](https://www.leaferjs.com/ui/reference/display/Box.html)、[Frame](https://www.leaferjs.com/ui/reference/display/Frame.html) 等元素均支持此属性。

### strokeWidth: [`IFourNumber`](https://www.leaferjs.com/ui/reference/interface/math/Math.html#ifournumber)

边框粗细，可以分别设置 4 个边框，默认为 0。

```ts
strokeWidth: [20, 10, 20, 10] // [top, right, bottom, left]
strokeWidth: [20, 10, 20] // [top, (right-left), bottom]
strokeWidth: [20, 10] // [ (top-bottom), (right-left)]
strokeWidth: 20 // all
```

## 示例

### 创建独立边框的 Rect 元素

```ts
// #独立边框 [创建独立边框的 Rect 元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/stroke-sides' // 导入独立边框插件

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    stroke: '#000',
    cornerRadius: 20,
    strokeWidth: [5, 0, 5, 10], // [top, right, bottom, left]
    editable: true
})

app.tree.add(rect)
```
