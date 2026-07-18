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
transformTool.scaleOf('center', 1.5 / element.scale)

// 想旋转到指定 rotation， 需减去元素当前 rotation，如下：
transformTool.rotateOf('center', 45 - element.rotation)

// 想倾斜到指定 skewX， 需减去元素当前 skewX，如下：
transformTool.skewOf('center', 45 - element.skewX)
```
