# PathEditor 配置

### [基础](./basic.md) &nbsp; &nbsp; 事件 &nbsp; &nbsp; [样式](./style.md)

## 关键属性

### keyEvent: `boolean`

是否接收键盘事件（如方向键移动），默认为 true。

### angleSnapCreateKey: [IShortcutKeysCheck](https://www.leaferjs.com/ui/api/interfaces/IShortcutKeysCheck.md)

创建固定角度直线的快捷键钩子函数，默认为 shiftKey。

```ts
angleSnapCreateKey(event) {
    return event.shiftKey
}
```

### angleSnapGap?: `number`

按住 angleSnapCreateKey 快捷键，创建路径的角度吸附间隔（需按住），默认为 15 度。

### freeCreateHandleKey: [IShortcutKeysCheck](https://www.leaferjs.com/ui/api/interfaces/IShortcutKeysCheck.md)

创建路径过程中可以自由调整手柄的快捷键（需按住），默认为 altKey。

```ts
freeCreateHandleKey(event) {
    return event.altKey
}
```

### freeHandleKey: [IShortcutKeysCheck](https://www.leaferjs.com/ui/api/interfaces/IShortcutKeysCheck.md)

编辑路径时可自由调整手柄的快捷键（需按住），默认为 ctrlKey 和 mateKey。

```ts
freeHandleKey(event) {
    return event.ctrlKey || event.mateKey
}
```

### mirrorHandleKey: [IShortcutKeysCheck](https://www.leaferjs.com/ui/api/interfaces/IShortcutKeysCheck.md)

编辑路径时可对称镜像调整手柄的快捷键（需按住），默认为 altKey。

```ts
mirrorHandleKey(event) {
    return event.altKey
}
```

### beforeCreate: `IPathEditorBeforeCreate`

创建 [PathNode](../PathNode.md) 节点事件的前置钩子函数（同时会影响 hover 节点）。

参数 data 为将创建的节点坐标（[内部坐标系](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#inner-内部坐标系)） 数据 `{ x, y }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ x, y }` 时将修改移动操作数据。

```ts
beforeCreate(data) {
    const { x, y } = data
    return true // return false | { x, y }  内部坐标系
}
```

### beforeSelect: `IPathEditorBeforeSelect`

选择 [PathNode](../PathNode.md) 节点事件的前置钩子函数。

参数 data 为选择数据 `{ targetNode }`。

返回 `false` 时将忽略本次选择操作，返回 `targetNode` 时将修改选择数据。

```ts
beforeSelect(data) {
    const { targetNode } = data // targetNode 可以为单个节点或多个节点，需要自己判断一下
    return true // return false | targetNode
}
```

### beforeMove: `IPathEditorBeforeMove`

移动 [PathNode](../PathNode.md) 节点事件的前置钩子函数。

参数 data 为增量操作（[内部坐标系](https://www.leaferjs.com/ui/guide/advanced/coordinate.md#inner-内部坐标系)）数据 `{ targetNode, x, y }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ x, y }` 时将修改移动操作数据。

```ts
beforeMove(data) {
    const { targetNode, x, y } = data
    return true // return false | { x, y }  内部坐标系
}
```
