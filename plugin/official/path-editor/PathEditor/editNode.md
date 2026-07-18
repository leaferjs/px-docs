# 节点操作

## 关键方法

### moveNode ( move: [`IPointData`](https://www.leaferjs.com/ui/reference/interface/math/Math.html#ipointdata), node?: [`PathNode`](../PathNode.md) | [`PathNode`](../PathNode.md)[] )

移动当前选中的节点元素。

`node` 可指定一个或多个节点元素，默认为当前选中节点。

### breakNode ( node?: [`PathNode`](../PathNode.md) )

断开节点，将线条断开，插入一个 M 命令。

`node` 可指定一个节点元素，默认为当前选中节点。

### connectNode ( aNode?: [`PathNode`](../PathNode.md), bNode?: [`PathNode`](../PathNode.md) )

连接两个断开的节点（焊接节点），无参数时为当前选中的两个节点。

### mergeNode ( aNode?: [`PathNode`](../PathNode.md), bNode?: [`PathNode`](../PathNode.md) )

合并连接两个断开的节点，会删除前面的一个节点，无参数时为当前选中的两个节点。

### deleteNode ( node?: [`PathNode`](../PathNode.md) | [`PathNode`](../PathNode.md)[] )

删除节点，支持多个，无参数时为当前选中的所有节点。
