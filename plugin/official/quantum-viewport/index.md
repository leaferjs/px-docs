<script setup>
import Case from '/component/Case.vue'
</script>

# QuantumViewport

量子引擎 · Quantum Viewport —— 百万级场景轻松缩放。

## 📆 更新日志

当前为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10008) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-quantum-viewport-1.0.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-quantum-viewport-1.0.0.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-quantum-viewport-1.0.0.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-quantum-viewport-1.0.0.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-quantum-viewport-1.0.0.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/quantum-viewport": "file:pxgrow/pxgrow-quantum-viewport-1.0.0.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.quantumViewport 访问插件内部功能。

需解压 `pxgrow-quantum-viewport-1.0.0.tgz` 文件，复制 `package/dist/quantum-viewport.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/quantum-viewport.js"></script>
<script>
  const { QuantumViewport } = PxGrow.quantumViewport
</script>
```

:::

## 示例

### [百万级矩形元素流畅缩放](https://www.pxgrow.com/coffee/?total=1000000)

<!-- ```ts
// #Quantum Lighter [百万级矩形元素流畅缩放]
import { App, Rect, Group, IGroup } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { QuantumViewport } from '@pxgrow/quantum-viewport'

const app = new App({ view: window, editor: {} })

new QuantumViewport(app.tree, { // 加速 tree 层
    sliceRender: 10000 // 每个切片1万个元素
})

create(app.tree, 100) // 创建100万个矩形

app.nextRender(() => {
    app.tree.zoom('fit')
})


function create(view: IGroup, num: number) {
    const groupSize = 10 * 100 * 1.5
    const column = num > 25 ? 10 : 5

    for (let i = 0; i < num; i++) {
        const group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * Math.floor(i / column)
        view.add(group)
        createRects(group, 0, 0, `hsl(${(i * 10) % 360},70%,50%)`)
    }
}

function createRects(group: IGroup, startX: number, startY: number, color: string) {
    let y, rect
    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (let j = 0; j < 100; j++) {
            if (j % 10 === 0) y += 10
            rect = new Rect()
            rect.x = startX
            rect.y = y
            rect.height = 10
            rect.width = 10
            rect.fill = color
            rect.editable = true
            group.add(rect)
            y += 12
        }
        startX += 12
    }
}
```
