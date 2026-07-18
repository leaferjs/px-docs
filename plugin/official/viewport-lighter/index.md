<script setup>
import Case from '/component/Case.vue'
</script>

# ViewportLighter

光速引擎 · Viewport Lighter —— 让复杂画布缩放如丝般顺滑。

## 📆 更新日志

当前为 v1.0.6，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10002) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-viewport-lighter-1.0.6.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-viewport-lighter-1.0.6.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-viewport-lighter-1.0.6.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-viewport-lighter-1.0.6.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-viewport-lighter-1.0.6.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/viewport-lighter": "file:pxgrow/pxgrow-viewport-lighter-1.0.6.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.viewportLighter 访问插件内部功能。

需解压 `pxgrow-viewport-lighter-1.0.6.tgz` 文件，复制 `package/dist/viewport-lighter.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/viewport-lighter.js"></script>
<script>
  const { ViewportLighter } = PxGrow.viewportLighter
</script>
```

:::

## 关键方法

### preMassCreate ( )

预备优化二次大量创建元素的性能，必须在下一次渲染前全部创建完成才能得到优化， 查看[代码示例](#优化二次大量创建元素的性能)。

## 示例

### 10 万级矩形元素流畅缩放

```ts
// #Viewport Lighter [10万级矩形元素流畅缩放]
import { App, Rect, Group, IGroup } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 10000 // 每个切片1万个元素
})

create(app.tree, 10) // 创建10万个矩形

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

### 1 万张不同的小图片流畅缩放

```ts
// #Viewport Lighter [1万张不同的小图片流畅缩放]
import { IGroup } from '@leafer-ui/interface'
import { App, Image, Group, Resource } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 500 // 每个切片500张图片
})

createImages(app.tree, 1) // 1万张小图片

app.nextRender(() => {
    app.tree.zoom('fit')
})


function createImages(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * 1.2 * (i % column)
        group.y = groupSize * Math.floor(i / column)
        view.add(group)
        create10000(group, i, 0, 0, `hsl(${i * 3},50%, 50%)`)
    }
}

function create10000(group: IGroup, num: number, startX: number, startY: number, color: string) {
    var y, image

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 100; j++) {
            if (j % 10 === 0) y += 10
            image = new Image(null)
            image.x = startX
            image.y = y
            image.height = 10
            image.width = 12
            image.editable = true
            createUrl(image, num * 10000 + i * 100 + j + 1, color)
            group.add(image)
            y += 12
        }
        startX += 12 + 2
    }
}


// 模拟不重复的图片
function createUrl(image: Image, count: number, color: string): void {
    setTimeout(() => {
        const canvas = new OffscreenCanvas(60, 50)
        const context = canvas.getContext('2d')

        context.fillStyle = color
        context.fillRect(0, 0, 60, 50)

        for (let i = 0; i < 10; i++) {
            context.fillStyle = `hsl(${Math.round(10 + Math.random() * 100)},70%,50%)`
            context.beginPath()
            context.arc(Math.random() * 60, Math.random() * 50, 1 + Math.random() * 10, 0, Math.PI * 2)
            context.fill()
        }

        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.font = `bold 12px Arial`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(count.toString(), 30, 25)

        const bitmap = canvas.transferToImageBitmap()
        image.fill = {
            type: 'image',
            mode: 'stretch',
            changeful: true,
            url: Resource.setImage('leafer://' + count + '.jpg', bitmap).url,
        }
    }, count * 2)
}
```

### 3 千张不同的图片流畅缩放

```ts
// #Viewport Lighter [3千张不同的图片流畅缩放]
import { IGroup } from '@leafer-ui/interface'
import { App, Image, Group, Resource } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 1000 // 每个切片1000张图片
})

createImages(app.tree, 1) // 3千张图片

app.nextRender(() => {
    app.tree.zoom('fit')
})


function createImages(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * 0.3 * Math.floor(i / column)
        view.add(group)
        createGroup(group, i, 0, 0, `hsl(${i * 3},60%,50%)`)
    }
}

function createGroup(group: IGroup, num: number, startX: number, startY: number, color: string) {
    var y, image

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 30; j++) {
            if (j % 10 === 0) y += 10
            image = new Image()
            image.x = startX
            image.y = y
            image.width = 10
            image.height = 3
            image.editable = true
            createUrl(image, num * 10000 + i * 30 + j + 1, color)
            group.add(image)
            y += 5
        }
        startX += 10 + 2
    }
}


// 模拟不重复的图片（每张1000 * 300px）
function createUrl(image: Image, count: number, color: string): void {
    setTimeout(() => {
        const canvas = new OffscreenCanvas(1000, 300)
        const context = canvas.getContext('2d')

        context.fillStyle = color
        context.fillRect(0, 0, 1000, 300)

        for (let i = 0; i < 10; i++) {
            context.fillStyle = `hsl(${Math.round(10 + Math.random() * 100)},70%,50%)`
            context.beginPath()
            context.arc(Math.random() * 1000, Math.random() * 300, 5 + Math.random() * 60, 0, Math.PI * 2)
            context.fill()
        }

        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.font = `bold 75px Arial`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(count.toString(), 500, 150)

        const bitmap = canvas.transferToImageBitmap()
        image.url = Resource.setImage('leafer://' + count + '.jpg', bitmap).url
    }, count * 5)
}
```

### 1 万条路径流畅缩放

```ts
// #Viewport Lighter [1万条路径流畅缩放]
import { IGroup } from '@leafer-ui/interface'
import { App, Polygon, Group } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 500 // 每个切片500条路径
})

createPaths(app.tree, 1) // 1万条路径

app.nextRender(() => {
    app.tree.zoom('fit')
})

function createPaths(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * Math.floor(i / column)
        view.add(group)
        create10000(group, 0, 0, `hsl(${i * 3},50%, 50%)`)
    }
}

function create10000(group: IGroup, startX: number, startY: number, color: string) {
    var y, path

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 100; j++) {
            if (j % 10 === 0) y += 10
            path = new Polygon()
            path.x = startX
            path.y = y
            path.fill = color
            path.curve = true
            path.points = [0, 9, Math.random() * 2, Math.random() * 3 + 3, Math.random() * 2 + 2, Math.random() * 3 + 5, Math.random() * 2 + 4, Math.random() * 2 + 2, Math.random() * 2 + 5, Math.random() * 2 + 3, Math.random() * 3 + 6, Math.random() * 1, Math.random() * 3 + 7, Math.random() * 3 + 6, Math.random() * 2 + 8, Math.random() * 3 + 6, 0, 9]
            path.editable = true
            group.add(path)
            y += 12
        }
        startX += 12
    }
}
```

### 优化二次大量创建元素的性能

```ts
// #Viewport Lighter [优化二次大量创建元素的性能]
import { App, Rect, Group, IGroup, RenderEvent, Debug } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

const viewportLighter = new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 10000 // 每个切片1万个元素
})

app.tree.add(new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    draggable: true
}))

setTimeout(() => {
    Debug.enable = true
    Debug.filter = 'RunTime' // 控制台看 Layout 时间

    viewportLighter.preMassCreate() // 预备优化二次大量创建元素的性能，必须在下一次渲染前全部创建完成才能得到优化 // [!code hl]

    const startTime = Date.now()
    create(app.tree, 100) // 创建100万个矩形

    app.tree.once(RenderEvent.END, () => {
        app.tree.add({ tag: 'Text', x: 20, y: 20, text: `二次创建100万个矩形至渲染用时：` + (Date.now() - startTime) + '毫秒', fontWeight: 'bold', fontSize: 20 })
    })

}, 1000)


function create(view: IGroup, num: number) {
    const groupSize = 10 * 100 * 1.5
    const column = num > 25 ? 10 : 5

    for (let i = 0; i < num; i++) {
        const group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * Math.floor(i / column) + 100
        createRects(group, 0, 0, `hsl(${(i * 10) % 360},70%,50%)`)
        view.add(group)
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

### 强制缓存视图

```ts
// #Viewport Lighter [强制缓存视图]
import { App, Rect, Group, IGroup } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

const lighter = new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 10000, // 每个切片1万个元素
    cacheViewport: 'auto', // 是否缓存视图，默认值为 auto（页面内容比较少，小于2个切片时不缓存）
})

// 强制缓存视图，运行中可实时修改
lighter.config.cacheViewport = true


create(app.tree, 10) // 创建10万个矩形

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
