<script setup>
import Case from '/component/Case.vue'
</script>

# Ruler

Ruler —— 轻松实现高性能标尺与参考线。

## 📆 更新日志

当前为 v1.0.0-beta.2，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10025) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `leafer-in-ruler-1.0.0-beta.2.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-ruler-1.0.0-beta.2.tgz
```

```sh [pnpm]
pnpm add ./leafer/leafer-in-ruler-1.0.0-beta.2.tgz
```

```sh [yarn]
yarn add ./leafer/leafer-in-ruler-1.0.0-beta.2.tgz
```

```sh [bun]
bun add ./leafer/leafer-in-ruler-1.0.0-beta.2.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer/ruler": "file:leafer/leafer-in-ruler-1.0.0-beta.2.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.ruler 访问插件内部功能。

需解压 `leafer-in-ruler-1.0.0-beta.2.tgz` 文件，复制 `package/dist/ruler.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/ruler.js"></script>
<script>
  const { Ruler } = PxGrow.ruler
</script>
```

:::

## 示例

### 标尺与参考线功能

```ts
// #Ruler [标尺与参考线功能]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

// 标尺自动关联 tree 层，并将标尺添加到 sky 层 // [!code hl:7]
const ruler = new Ruler(app, {
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
    // guideColor: '#ff5675' // 辅助线颜色
    // selectedColor: '#836DFF', // 选中内容的颜色
    /* beforeMove({ targetGuide, guideType, x, y }) { // 移动参考线之前的前置钩子函数，同编辑器的 beforeMove 一样使用
         // x, y 为参考线将要移动到的 page 坐标
         console.log(targetGuide, guideType, x, y)
         return true // return false | { x, y }  page坐标系
     } */
})

// 上面的简洁写法，等同于:
// const ruler = new Ruler(app.tree, {})
// app.sky.add(ruler)

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

// 从标尺上可拉出参考线 // [!code hl:4]
// 可直接将参考线的Line元素合并到开源社区吸附插件的元素列表中，进行自动吸附
console.log(ruler.xGuides) // x轴的所有参考线
console.log(ruler.yGuides) // y轴的所有参考线


setTimeout(() => {
    app.editor.select(app.tree.children[0].children[0])
}, 600)
```

### 浅色风格

```ts
// #Ruler [浅色风格]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#F2f2f2',
    pointSnap: true,
    editor: {},
})

new Ruler(app, {
    fill: '#F2f2f2', // 标尺的填充色，只能为字符串 // [!code hl]
})

new ScrollBar(app, { padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))
```

### 设置标尺单位

```ts
// #Ruler [设置标尺单位]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

const ruler = new Ruler(app, {
    unit: 'px', // 支持 'px' | 'in' | 'cm' | 'mm' | 'm' | 'pt' | 'pc' 等单位，可设置单位对象: { type: 'mm', px: 96 / 25.4 }  // [!code hl]
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
})

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))


// 修改标尺单位 // [!code hl:16]
setTimeout(() => {
    ruler.changeConfig({ unit: 'mm' })

    // 提供单位转换方法
    // console.log(ruler.config.unit)
    console.log(ruler.pxToUnit(96)) // 像素转换为mm
    console.log(ruler.unitToPx(25.4)) // mm转换为像素

    setTimeout(() => {
        ruler.changeConfig({ unit: { type: '', px: 1 } }) // 不显示名称的 px 单位
    }, 1500)

}, 1500)



/* 常用的单位对象
const units = {
    // Pixel（像素）
    px: { type: 'px', px: 1 },

    // Inch（英寸）
    in: { type: 'in', px: 96 },

    // Centimeter（厘米）
    cm: { type: 'cm', px: 96 / 2.54 },

    // Millimeter（毫米）
    mm: { type: 'mm', px: 96 / 25.4 },

    // Meter (米)
    m: { type: 'm', px: 96 / 2.54 * 100 },

    // Point（点）
    pt: { type: 'pt', px: 96 / 72 },

    // Pica（派卡）
    pc: { type: 'pc', px: 96 / 6 }
}

console.log(units)
*/
```

### 隐藏与显示标尺

```ts
// #Ruler [隐藏与显示标尺]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

const ruler = new Ruler(app, {
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
})

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))


// 隐藏与显示标尺 // [!code hl:10]
setTimeout(() => {

    ruler.visible = false // 隐藏标尺

    setTimeout(() => {
        ruler.visible = true // 显示标尺
    }, 1500)

}, 1500)

```
