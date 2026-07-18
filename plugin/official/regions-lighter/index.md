<script setup>
import Case from '/component/Case.vue'
</script>

# RegionsLighter

光速引擎 · Regions Lighter —— 多个动画区域独立渲染，大幅降低重绘面积。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10016) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-regions-lighter-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-regions-lighter-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-regions-lighter-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-regions-lighter-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-regions-lighter-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/regions-lighter": "file:pxgrow/pxgrow-regions-lighter-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.regionsLighter 访问插件内部功能。

需解压 `pxgrow-regions-lighter-1.0.0-beta.tgz` 文件，复制 `package/dist/regions-lighter.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/regions-lighter.js"></script>
<script>
  const { RegionsLighter } = PxGrow.regionsLighter
</script>
```

:::

## 示例

### 多区域独立渲染

```ts
// #Regions Lighter [多个区域独立渲染]
import { App, Rect, Debug } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 //
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件

import { RegionsLighter } from '@pxgrow/regions-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

const regionsLighter = new RegionsLighter(app.tree, { // 加速 tree 层  // [!code hl：5]
    regions: 20  // 最多支持多少个独立区域同时渲染，设为 1个 表示不开启，默认为 20
})

regionsLighter.config.regions = 3 // 可以随时修改配置，实时生效


let y: number, rect: Rect, startX = 0, startY = 0

for (let i = 0; i < 10; i++) {
    if (i % 10 === 0) startX += 50
    y = startY
    for (let j = 0; j < 2; j++) {
        if (j % 10 === 0) y += 50
        rect = new Rect(null)
        rect.x = startX
        rect.y = y
        rect.height = 50
        rect.width = 50
        rect.fill = `hsl(${i * j * 3},50%, 50%)`
        rect.editable = true
        if ((i % 2 && j % 2) || (i * j === 8)) {
            rect.origin = 'center'
            rect.animation = { keyframes: [{ rotation: 45 }, { rotation: 135, scale: 1.2 }], duration: 1, swing: true }
        }
        app.tree.add(rect)
        y += 70
    }
    startX += 70
}

Debug.showRepaint = true // 显示重绘框

```
