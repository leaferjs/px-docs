# 获取节点

## 关键方法

### getBeforeNode ( node: [`PathNode`](../PathNode.md), lineCheck?: `boolean`, includeCloseNode?: `boolean`, useEndNode?: `boolean` ): [`PathNode`](../PathNode.md)

获取指定节点前的一个节点元素，没有时返回值为空。

`lineCheck` 表示只获取一条连续线条上的点(M -> Z 区间)。

`useEndNode` 参数表示 node 点为 起始点时，是否返回路径的结束点，默认为 false。

`includeCloseNode` 参数表示 node 点为 起始点时，是否获取 Z 命令的结束点，默认为 false。

### getAfterNode ( node: [`PathNode`](../PathNode.md), lineCheck?: `boolean`, includeCloseNode?: `boolean`, useBeginNode?: `boolean` ): [`PathNode`](../PathNode.md)

获取指定节点后的一个节点元素。

`lineCheck` 参数表示只获取一条连续线条上的点(M -> Z 区间)。

`includeCloseNode` 参数表示是否获取 Z 命令的结束点，默认为 false。

`useBeginNode` 参数表示如果 after 点为 闭合结束点时，是否返回路径的起始点，默认为 false。

### getBeginNode ( node: [`PathNode`](../PathNode.md) ): [`PathNode`](../PathNode.md)

获取指定节点所在线条的起始点。

### getEndNode( node: [`PathNode`](../PathNode.md), includeCloseNode?: `boolean` ): [`PathNode`](../PathNode.md)

获取指定节点所在线条的最后节点，'includeCloseNode' 参数表示是否保护 Z 闭合节点，默认不包含。

### isClosePath ( node: [`PathNode`](../PathNode.md) ): `boolean`

当前指定节点所在的线条是否闭合。
