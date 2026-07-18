# 控制手柄

## 关键方法

### selectHandle ( name: [`PathNodeHandleName`](../interface/PathCommandNodeData.md#pathnodehandlename), node?: [`PathNode`](../PathNode.md) )

选择当前节点元素的其中一个手柄: ['a'](../interface/PathCommandNodeData.md#pathnodehandlename) 或 ['b'](../interface/PathCommandNodeData.md#pathnodehandlename)。

`node` 参数可以指定一个节点选中，默认为当前选中的节点。

### cancelHandle ( )

取消选中元素手柄。

### setHandleType ( type: [`PathNodeHandleType`](../interface/PathCommandNodeData.md#pathnodehandletype), node?: [`PathNode`](../PathNode.md) | [`PathNode`](../PathNode.md)[] )

设置当前节点元素的 [手柄类型](../interface/PathCommandNodeData.md#pathnodehandletype)，支持多选同时设置。

`node` 可指定一个或多个节点元素，默认为当前选中节点。

### moveHandle ( move: [`IPointData`](https://www.leaferjs.com/ui/reference/interface/math/Math.html#ipointdata), handleName?: [`PathNodeHandleName`](../interface/PathCommandNodeData.md#pathnodehandlename) )

移动当前选中的控制手柄。

`handleName` 可指定要移动的手柄名称（可选）。
