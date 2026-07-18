# PathNode

路径节点元素。

::: tip 继承
PathEditor &nbsp;>&nbsp; [Group](https://www.leaferjs.com/ui/reference/display/Group.html) &nbsp;>&nbsp; [UI](https://www.leaferjs.com/ui/reference/display/UI.html)
:::

## 关键属性

### nodeData: [`IPathCommandNode`](./interface/PathCommandNodeData.md#ipathcommandnode)

节点数据。

```ts
interface IPathCommandNode {
  name: 'M^' | 'L^' | 'C^' | 'Z^'
  x?: number
  y?: number
  a?: IPointData // 第一个控制手柄，连接上一个节点（闭合路径的起始点会自动连接最后一个点）
  b?: IPointData // 第二个控制手柄，连接下一个节点
  ab?: PathNodeHandleType // 手柄类型
}
```

### active: `boolean`

当前是否为激活状态，激活状态下，曲线会显示控制手柄。

### selected: `boolean`

当前是否为选中状态。

### selectedHandleName: [`PathNodeHandleName`](./interface/PathCommandNodeData.md#pathnodehandlename)

当前选中的手柄名称。

```ts
type PathNodeHandleName = 'a' | 'b' // 手柄名称
```

## 只读属性

### isBeginNode: `boolean`

当前节点是否为起始点。

### isCloseNode: `boolean`

当前节点是否为 Z 闭合点。

### isEndNode: `boolean`

当前节点是否为最后节点，包含 Z 闭合点。

### isEndPointNode: `boolean`

当前节点是否为最后节点， 不包含 Z 闭合点。

### isCurveNode: `boolean`

当前节点是否为曲线。

## 显示元素

### point: [`Ellipse`](https://www.leaferjs.com/ui/reference/display/Ellipse.html)

用于显示节点的圆点元素。

### beforeAddPoint: [`Ellipse`](https://www.leaferjs.com/ui/reference/display/Ellipse.html)

连接上一个节点的中间添加点，仅在元素选中时才会显示。

### afterAddPoint: [`Ellipse`](https://www.leaferjs.com/ui/reference/display/Ellipse.html)

连接下一个节点的中间添加点，仅在元素选中时才会显示。

### aHandle: [`Rect`](https://www.leaferjs.com/ui/reference/display/Rect.html)

第一个控制手柄，连接上一个节点，仅在元素激活后才会显示。

### bHandle: [`Rect`](https://www.leaferjs.com/ui/reference/display/Rect.html)

第二个控制手柄，连接下一个节点，仅在元素激活后才会显示。

### aHandleLine: [`Line`](https://www.leaferjs.com/ui/reference/display/Line.html)

第一个手柄的连接线，仅在元素激活后才会显示。

### bHandleLine: [`Line`](https://www.leaferjs.com/ui/reference/display/Line.html)

第二个手柄的连接线，仅在元素激活后才会显示。

## 关键方法

### update ( )

更新节点，于节点数据的位置和状态保持一致。

### changeNodeName ( name: `'M^'` | `'L^'` | `'C^'` | `'Z^'` )

改变节点的类型。
