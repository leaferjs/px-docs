<script setup>
import Case from '/component/Case.vue'
</script>

# Shadow

阴影变形插件。

支持斜切、旋转阴影，并支持设置变形原点。

## 更新日志

当前版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件暂不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [购买会员](https://www.pxgrow.com/plugin/view/?id=10005) 后才能使用。

### 第一步：获取插件包

购买会员后，你将获得一个名为 `leafer-in-shadow-1.0.0.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `leafer` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./leafer/leafer-in-shadow-1.0.0.tgz

```

```sh [pnpm]
pnpm add ./leafer/leafer-in-shadow-1.0.0.tgz

```

```sh [yarn]
yarn add ./leafer/leafer-in-shadow-1.0.0.tgz

```

```sh [bun]
bun add ./leafer/leafer-in-shadow-1.0.0.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@leafer-in/shadow": "file:leafer/leafer-in-shadow-1.0.0.tgz"`

---

或通过 script 标签引入，使用全局变量 LeaferIN.shadow 访问插件内部功能。

解压 `leafer-in-shadow-1.0.0.tgz` ，复制 `package/dist/shadow.js` 使用。

::: code-group

```html [web]
<script src="/lib/leafer/shadow.js"></script>
<script>
  const {} = LeaferIN.shdow
</script>
```

:::

## 关键属性

```ts
interface ShadowEffect {
  x?: number
  y?: number
  blur?: number
  spread?: number
  color?: Color
  blendMode?: BlendMode
  visible?: boolean
  scaleFixed?: 'zoom-in' | false
  box?: boolean // 和 CSS3 中的 boxShadow 效果一致, 只显示图形外部的阴影

  // 斜切、缩放、旋转阴影
  skew?: IPointData
  scale?: IPointData
  rotation?: number
  origin?: IDirection // 斜切、缩放、旋转原点方位，相对元素的stroke / box包围盒，默认为 bottom
}

type IDirection =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'
```

## 示例

### 倾斜变形

```ts
// #阴影变形 [skew 倾斜变形]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/shadow'  // 导入阴影变形插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: [{
        blur: 20,
        skew: { x: -90, y: 0 },  // skew 倾斜变形 // [!code hl]
        scale: { x: 1, y: 0.5 }
    }]
})

leafer.add(rect)
```

### 设置倾斜变形的原点

```ts
// #阴影变形 [设置 origin 变形中心点]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/shadow'  // 导入阴影变形插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: [{
        blur: 20,
        color: '#FF0000AA',
        skew: { x: -60, y: 0 },
        origin: 'top' // 变形原点， 默认为bottom
    }, {
        blur: 20,
        color: '#00FF00AA',
        skew: { x: 60, y: 0 },
        origin: 'top'
    }]
})

leafer.add(rect)
```

### 旋转阴影

```ts
// #阴影变形 [rotate 旋转阴影]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/shadow' // 导入阴影变形插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: [{
        blur: 20,
        color: '#FF0000AA',
        rotation: -20 // rotate 旋转阴影 // [!code hl]
    },
    {
        blur: 20,
        color: '#00FF00AA',
        rotation: 20
    }]
})

leafer.add(rect)
```
