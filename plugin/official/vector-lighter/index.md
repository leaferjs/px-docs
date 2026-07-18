<script setup>
import Case from '/component/Case.vue'
</script>

# VectorLighter

光速引擎 · Vector Lighter —— 让复杂矢量路径与阴影渲染丝滑流畅。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10007) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-vector-lighter-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-vector-lighter-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-vector-lighter-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-vector-lighter-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-vector-lighter-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/vector-lighter": "file:pxgrow/pxgrow-vector-lighter-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.vectorLighter 访问插件内部功能。

需解压 `pxgrow-vector-lighter-1.0.0-beta.tgz` 文件，复制 `package/dist/vector-lighter.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/vector-lighter.js"></script>
<script>
  const { VectorLighter } = PxGrow.vectorLighter
</script>
```

:::

## 示例

### 创建 complex 元素

```ts
// #VectorLighter [创建 complex 元素]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { VectorLighter } from '@pxgrow/vector-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new VectorLighter(app.tree)

const image = new Image({
    x: 100,
    y: 100,
    url: '/image/leafer.jpg',
    editable: true,
    complex: true, // 创建 complex 元素，智能缓存加速  // [!code hl]
    innerShadow: [{
        x: 10,
        y: 5,
        blur: 20,
        color: '#FF0000AA'
    },
    {
        x: -20,
        y: -5,
        blur: 20,
        color: '#00FFFFAA'
    }]
})

app.tree.add(image)
```
