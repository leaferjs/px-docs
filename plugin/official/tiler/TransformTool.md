# TransformTool

编辑框的变换工具，支持手动移动、旋转、调整大小。

## 关键方法

### move ( x: `number` | [`IPointData`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ipointdata), y = 0): void

位移 编辑框 <badge>增量操作</badge>， 支持直接传入 [坐标对象](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ipointdata)。

### flip( axis：`'x'` | `'y'` )

按轴方向（ [世界坐标系](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#world-世界坐标系)） 镜像/翻转编辑框。

### scaleOf ( origin: [`IAlign`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ialign) | [`IPointData`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ipointdata), multiplyScaleX: `number`, multiplyScaleY = scaleX)

围绕 编辑框 的原点 origin（ [box 坐标](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#box-坐标系) ）缩放选中元素 <badge>增量操作</badge>。

### rotateOf ( origin: [`IAlign`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ialign) | [`IPointData`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ipointdata), addRotation: `number`)

围绕 编辑框 的原点 origin（ [box 坐标](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#box-坐标系) ）旋转选中元素 <badge>增量操作</badge>。

### skewOf ( origin: [`IAlign`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ialign) | [`IPointData`](https://www.leaferjs.com/ui/reference/interface/math/Math.md#ipointdata), addSkewX: `number`, addSkewY = 0)

围绕 编辑框 的原点 origin（ [box 坐标](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#box-坐标系) ）倾斜选中元素 <badge>增量操作</badge>。

```ts
// 想缩放到指定 scale， 需除以元素当前 scale，如下：
tilerEditor.transformTool.scaleOf('center', 1.5 / element.scale)

// 想旋转到指定 rotation， 需减去元素当前 rotation，如下：
tilerEditor.transformTool.rotateOf('center', 45 - element.rotation)

// 想倾斜到指定 skewX， 需减去元素当前 skewX，如下：
tilerEditor.transformTool.skewOf('center', 45 - element.skewX)
```

## 示例

### 缩放背景图片

```ts
// #Tiler [缩放图片]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 500,
    editable: true,
    editInner: 'TileEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        gap: 10,
        scale: 0.6
    }
})

app.tree.add(rect)

// 模拟双击元素打开平铺编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)

        setTimeout(() => {

            const tileEditor = app.editor.getInnerEditor('TileEditor')

            // 围绕图片的左上角缩放  // [!code hl:2]
            tileEditor.imageTransformTool.scaleOf('top-left', 1.5) // 增量缩放操作

            // 围绕元素的中心点缩放 
            // const { imageTarget, editTarget } = tileEditor
            // const center = imageTarget.getBoxPoint(editTarget.getWorldPointByBox(AroundHelper.getPoint('center', editTarget.boxBounds)))
            // tileEditor.innerTransformTool.scaleOf(center, 1.5) // 增量缩放操作


        }, 2000)

    }, 600)
})

```

### resize 元素

```ts
// #Tiler [resize 元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件 // [!code hl]

const app = new App({
    view: window, editor: {}
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 500,
    editable: true,
    editInner: 'TileEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        gap: 10,
        scale: 0.6
    }
})

app.tree.add(rect)

// 模拟双击元素打开平铺编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)

        setTimeout(() => {

            const tileEditor = app.editor.getInnerEditor('TileEditor')

            // 围绕元素的中心点缩放（resize) // [!code hl:2]
            tileEditor.innerTransformTool.scaleOf('center', 1, 1.5) // 增量缩放操作
            tileEditor.updateImagePaint()

        }, 2000)

    }, 600)
})

```
