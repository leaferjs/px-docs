# PathCommandNodeData

通用可视化路径节点接口，可直接从 `leafer-ui` 主包中引入。

### IPathCommandNode

可视化路径节点对象。

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

### PathNodeHandleName

手柄名称。

```ts
type PathNodeHandleName = 'a' | 'b' // 手柄名称
```

### PathNodeHandleType

手柄的类型，曲线的默认类型为 mirrorAngle 。

```ts
enum PathNodeHandleType {
  none = 1, // 无手柄
  free = 2, // 每个手柄自由控制
  mirrorAngle = 3, // 镜像手柄（仅镜像角度），两个手柄看起来是一条直线
  mirror = 4, // 镜像手柄（镜像角度和长度），两个手柄看起来是一条直线，且两边的手柄长度一样
}
```
