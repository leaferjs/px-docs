<script setup>
import Case from '/component/Case.vue'
</script>

# Shape Editor

Shape Editor —— 轻松实现形状编辑。

## 📆 更新日志

当前为 v1.0.0-beta.2，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10020) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-shape-editor-1.0.0-beta.2.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-shape-editor-1.0.0-beta.2.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-shape-editor-1.0.0-beta.2.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-shape-editor-1.0.0-beta.2.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-shape-editor-1.0.0-beta.2.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/shape-editor": "file:pxgrow/pxgrow-shape-editor-1.0.0-beta.2.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.shapeEditor 访问插件内部功能。

需解压 `pxgrow-shape-editor-1.0.0-beta.2.tgz` 文件，复制 `package/dist/shape-editor.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/shape-editor.js"></script>
<script>
  const { EllipseEditTool, RectEditTool } = PxGrow.shapeEditor
</script>
```

:::

## 示例

### Rect 元素

```ts
// #Shape Editor [Rect 元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        RectEditTool: {
            // padding: 15 // 控制点离编辑框的边距
            // point: {} // 基础控制点样式
            // topLeftPoint: {}, // 左上角控制点样式
            // topRightPoint: {}, // 右上角控制点样式
            // bottomRightPoint: {}, // 右下角控制点样式
            // bottomLeftPoint: {}, // 左下角控制点样式
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'RectEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(rect)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(rect)
}, 600)

```

### Ellipse 元素

```ts
// #Shape Editor [Ellipse 元素]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/shape-editor'  // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        EllipseEditTool: { // 编辑工具配置
            // 快捷键：按住 Ctrl / Command 键拖拽角度控制点，会固定夹角旋转

            // angleSnapGap: 5, // 角度吸附间隔，按住Shift拖拽角度控制点时生效
            // point: {}, // 基础控制点样式
            // startPoint: { stroke: 'red' }, // 起点样式
            // endPoint: {}, // 结束点样式
            // innerPoint: {} // 内径控制点样式
        }
    }
})

const ellipse = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'EllipseEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse)
}, 600)

```

### Ellipse 弧线

```ts
// #Shape Editor [Ellipse 弧线]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        editBoxType: 'stroke',
        EllipseEditTool: {
            innerPoint: { visible: false } // 隐藏内径控制点
        }
    }
})

const ellipse = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    innerRadius: 1,
    closed: false, // [!code hl]
    stroke: 'black',
    strokeAlign: 'center',
    strokeWidth: 20,
    // editOuter: 'EllipseEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置
    editable: true
})

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse)
}, 600)
```

### 切分 Ellipse 为两个半圆

```ts
// #Shape Editor [切分 Ellipse 为两个半圆]
import { App, Ellipse, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor'
import { EllipseEditTool } from '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        editBoxType: 'stroke',
        spread: 10,
        EllipseEditTool: {
            innerPoint: { locked: true, cursor: 'row-resize' } // 内径控制点不能拖动，只能点击，点击后切分为两个半圆 // [!code hl]
        }
    }
})

const inputData = {
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    innerRadius: 1,
    closed: false,
    stroke: 'black',
    strokeAlign: 'center',
    strokeWidth: 20,
    editable: true
}

const ellipse = new Ellipse(inputData)

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse);

    // 监听内径控制点的点击事件
    (app.editor.getEditTool('EllipseEditTool') as EllipseEditTool).innerRadiusPoint.on(PointerEvent.CLICK, () => {

        // 计算中心点角度
        let { startAngle, endAngle } = ellipse
        let innerAngle: number

        if (startAngle || endAngle) {
            if (endAngle < startAngle) endAngle += 360
            innerAngle = startAngle + (endAngle - startAngle) / 2
        } else {
            innerAngle = 180
            endAngle = 360
        }

        // 第一个半圆
        const ellipse1 = new Ellipse({
            ...inputData,
            y: 350,
            startAngle,
            endAngle: innerAngle
        })

        app.tree.add(ellipse1)

        // 第二个半圆
        const ellipse2 = new Ellipse({
            ...inputData,
            x: 350,
            y: 350,
            startAngle: innerAngle,
            endAngle
        })

        app.tree.add(ellipse2)

    })
}, 600)
```

### Star 元素

```ts
// #Shape Editor [Star 元素]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        StarEditTool: {
            // cornerRadiusRadding: 15, // 圆角控制点离图形顶部的默认边距
            // point: {}, // 基础控制点样式
            // cornersPoint: {}, // 角数控制点样式
            // cornerRadiusPoint: {}, // 圆角控制点样式
            // innerPoint: {} // 内径控制点样式
        }
    }
})

const rect = new Star({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'StarEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(rect)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(rect)
}, 600)

```

### Polygon 元素

```ts
// #Shape Editor [Polygon 元素]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        PolygonEditTool: {
            // cornerRadiusRadding: 15, // 圆角控制点离图形顶部的默认边距
            // point: {}, // 基础控制点样式
            // sidesPoint: {}, // 边数控制点样式
            // cornerRadiusPoint: {}, // 圆角控制点样式
        }
    }
})

const rect = new Polygon({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    // editOuter: 'PolygonEditTool', // 基础图形元素默认为 tag + EditTool，可以不用设置 // [!code hl]
    editable: true
})

app.tree.add(rect)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(rect)
}, 600)

```
