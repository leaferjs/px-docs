# Path Editor 更新日志

[查看使用文档](./index.md)

## 2026 / 06 / 30

> v1.1.1

###### 🌱 新增

\- 🌸 首尾节点创建时拉出手柄不进行对称控制

#### 🌷 感谢反馈

@小志

## 2026 / 06 / 18

> v1.1.0

###### 🌱 新增

\- 🌸 增加 showHandle 配置，可控制是否显示曲线控制手柄

#### 🌷 感谢反馈

@闰土

## 2026 / 04 / 14

> v1.0.9

###### 🪲 修复

\- 🌸 dataType采用node时，创建节点后控制台会报错的问题

\- 🌸 创建节点过程中，删除节点后再创建节点可能会不符合预期的问题

#### 🌷 感谢反馈

@闰土 @小志

## 2026 / 04 / 03

> v1.0.8

依赖于 LeaferJS [ v2.0.7](https://www.leaferjs.com/ui/update/#_2026-04-03)

#### 🌱 新增

\- 🌸 支持曲线与折线、折线与曲线之间的圆角。

\- 🌸 支持给节点单独[设置圆角](/plugin/official/path-editor/index.md#单独设置节点圆角)

#### 🌷 感谢反馈

@闰土

## 2026 / 03 / 20

> v1.0.7

#### 🪲 修复

\- 🌸 修复hover节点会导致元素path出现两个相同结束坐标点的问题

#### 🌷 感谢反馈

@闰土

## 2026 / 03 / 19

> v1.0.6

#### 🪲 修复

\- 🌸 键盘移动控制点会产生不正确的偏移问题

\- 🌸 闭合路径删除路径中的最后一个节点会导致断开的问题

#### 🌷 感谢反馈

@闰土

## 2026 / 03 / 11

> v1.0.5

#### 🪲 修复

\- 🌸 路径使用了around属性后，编辑节点会偏移的问题

\- 🌸 键盘移动节点会产生不正确的偏移问题

#### 🌷 感谢反馈

@闰土 @张老爷

## 2026 / 02 / 26

> v1.0.4

#### 🪲 修复

\- 🌸 线条最后一个添加点，拖拽添加后会独立出来的问题

#### 🌷 感谢反馈

@闰土

## 2026 / 02 / 10

> v1.0.3

#### 🪲 修复

\- 🌸 镜像手柄 转 镜像角度手柄时，会重新更新手柄位置的问题

\- 🌸 监听双击事件退出内部编辑器后点击画布会报错的问题

#### 🌷 感谢反馈

@小志 @闰土

## 2026 / 01 / 29

> v1.0.2

兼容 LeaferJS [ v2.0.0](https://www.leaferjs.com/ui/update/#_2026-01-23)

## 2025 / 01 / 22

> v1.0.1

依赖于 LeaferJS [ v1.12.2](https://www.leaferjs.com/ui/update/#_2025-12-27)

#### 🪲 修复

\- 🌸 修复 B 控制手柄操作不符合预期的问题

\- 🌸 按住空格键移动画布时，也会创建点的问题

\- 🌸 在两个分段中，点上一个分段连接时会有显示问题

#### 🌷 感谢反馈

@小志

## 2025 / 12 / 27

> v1.0.0

依赖于 LeaferJS [ v1.12.2](https://www.leaferjs.com/ui/update/#_2025-12-27)

#### 🌱 新增

\- 🌸 全面适配 [基础元素](/plugin/official/path-editor/index.md#编辑-rect-元素) Rect、Ellipse、Star、Polygon、Line 等

\- 🌸 [焊接节点](/plugin/official/path-editor/index.md#connectnode-anode-pathnode-bnode-pathnode)、[合并连接节点](/plugin/official/path-editor/index.md#mergenode-anode-pathnode-bnode-pathnode)

\- 🌸 创建路径过程中可以按住 Alt 键自由调整手柄，[可配置快捷键](/plugin/official/path-editor/config/event.md#freehandlekey-ishortcutkeyscheck)

\- 支持手动 [删除节点](/plugin/official/path-editor/index.md#deletenode-node-pathnode-pathnode)

\- 创建路径时，可自动连接至其他线段，[可配置 autoConnect](/plugin/official/path-editor/config/basic.md#anglesnapgap-number)

\- 按住 Shift 键可创建固定角度的直线，[可配置快捷键](/plugin/official/path-editor/config/event.md#anglesnapcreatekey-ishortcutkeyscheck)

#### 🌱 新增配置

\- 创建路径时，是否自动连接路径的首尾端点 [autoConnect](/plugin/official/path-editor/config/basic.md#anglesnapgap-number)

\- 创建固定角度直线的快捷键 [angleSnapCreateKey](/plugin/official/path-editor/config/event.md#anglesnapcreatekey-ishortcutkeyscheck)

\- 角度吸附间隔 [angleSnapGap](/plugin/official/path-editor/config/event.md#anglesnapgap-number)

\- 创建路径过程中可以自由调整手柄的快捷键 [freeCreateHandleKey](/plugin/official/path-editor/config/event.md#freecreatehandlekey-ishortcutkeyscheck)

\- 编辑路径时可自由调整手柄的快捷键 [freeHandleKey](/plugin/official/path-editor/config/event.md#freehandlekey-ishortcutkeyscheck)

\- 编辑路径时可对称镜像调整手柄的快捷键 [mirrorHandleKey](/plugin/official/path-editor/config/event.md#mirrorhandlekey-ishortcutkeyscheck)

\- 创建 [PathNode](./PathNode.md) 节点事件的前置钩子函数 [beforeCreate](/plugin/official/path-editor/config/event.md#beforecreate-ipatheditorbeforecreate)，可用于开发节点吸附功能

#### 🌱 新增方法属性

\- [PathNode](./PathNode.md) 增加改变节点的类型方法 [changeNodeName()](/plugin/official/path-editor/PathNode.md#changenodename-name-m-l-c-z)

\- [PathNode](./PathNode.md) 增加节点状态属性 [isBeginNode isEndNod isCurveNode](/plugin/official/path-editor/PathNode.md#isbeginnode-boolean) 等

\- 编辑器增加 [esc()](/plugin/official/path-editor/index.md#esc) 模拟快捷键逐步退出编辑功能

\- 编辑器增加 [cancelCreate()](/plugin/official/path-editor/index.md#cancelcreate) 取消创建状态

\- 编辑器增加 [cancelHover()](/plugin/official/path-editor/index.md#cancelhover) 取消显示临时 hover 线条

\- 编辑器增加 [getEndNode()](/plugin/official/path-editor/index.md#getendnode-node-pathnode-includeclosenode-boolean-pathnode) 获取节点所在线条的最后节点

\- 编辑器增加 [connectNode()](/plugin/official/path-editor/index.md#connectnode-anode-pathnode-bnode-pathnode) 连接两个断开的节点

\- 编辑器增加 [mergeNode()](/plugin/official/path-editor/index.md#mergenode-anode-pathnode-bnode-pathnode) 合并连接两个断开的节点

\- 编辑器增加 [deleteNode()](/plugin/official/path-editor/index.md#deletenode-node-pathnode-pathnode) 删除节点

\- 编辑器增加 [getLineNodes()](/plugin/official/path-editor/index.md#getlinenodes-node-pathnode-pathnode) 获取节点所在线条的所有节点列表

\- 编辑器增加 [spliceLineNodes()](/plugin/official/path-editor/index.md#reverselinenodes-node-pathnode) splice 提取节点所在线条的所有节点

\- 编辑器增加 [reverseLineNodes()](/plugin/official/path-editor/index.md#reverselinenodes-node-pathnode) 颠倒节点所在线条的所有节点前后顺序

\- 编辑器增加 [deleteLineNodes()](/plugin/official/path-editor/index.md#deletelinenodes-node-pathnode) 删除节点所在线段的所有节点

#### 🪲 修复

\- 🌸 部分基础元素路径未闭合的问题

\- 🌸 起始节点不能产生对称手柄的问题

\- 🌸 修复带圆角路径的显示问题

\- 返回历史数据造成的创建点异常的问题

\- 创建路径时， hover 到画布外未停止显示 hover 线的问题

#### 🌷 感谢反馈

@小志 @张老爷

## 2025 / 12 / 04

> v1.0.0-beta.2

依赖于 LeaferJS [ v1.11.2](https://www.leaferjs.com/ui/update/#_2025-12-1)

#### 🌱 新增

\- 🌸 支持配置 [beforeMove](/plugin/official/path-editor/config/event.md#beforemove-ipatheditorbeforemove)，可用于开发节点吸附功能

\- 🌸 支持配置 [beforeSelect](/plugin/official/path-editor/config/event.md#beforeselect-ipatheditorbeforeselect)，用于控制节点选中逻辑

\- 🌸 editBox 配置支持 [多选节点配置](/plugin/official/path-editor/config/basic.md#editbox-ieditorconfig)

\- 新增 [PathEditorEvent](/plugin/official/path-editor/event/PathEditorEvent.md) 事件，可以用于监听节点、手柄选中事件

\- 新增 [PathEditorMoveEvent](/plugin/official/path-editor/event/PathEditorMoveEvent.md)，可用于监听移动节点、手柄事件

\- 优化结束命令，来回转换时自动添加、移除多余点（保持显示效果不变）

#### 🪲 修复

\- 🌸 通过设置控制手柄类型，将直线转曲线特殊情况下不生效的问题

\- 🌸 scaleX 与 scaleY 不一致时，不会显示路径描边的问题

\- 最后一个点不会显示添加按钮的问题

\- 修复若干创建节点、连接节点的问题

#### 🌷 感谢反馈

@小志 @张老爷

## 2025 / 12 / 04

> v1.0.0-beta

依赖于 LeaferJS [ v1.11.2](https://www.leaferjs.com/ui/update/#_2025-12-1)

#### 🌱 新增

\- 🌸 支持编辑路径时，固定背景图片不动

\- 🌸 支持正反方向连接路径继续创建

\- 🌸 支持设置控制手柄的状态、曲线控制类型

\- 支持单选、多选节点

\- 支持断开节点

\- 支持获取、设置创建状态

\- 支持获取、移动节点和控制手柄的坐标

\- 支持键盘方向键移动选中节点和手柄

\- 支持配置返回的数据类型

\- 支持配置创建光标

\- 直线结束时直接闭合节点，不增加多余的点

\- 支持历史记录重写

#### 🌷 感谢反馈

@小志 @张老爷

## 2025 / 11 / 27

> v1.0.0-alpha.2

依赖于 LeaferJS [ v1.11.1](https://www.leaferjs.com/ui/update/#_2025-11-25)

#### 🌱 新增

\-🌸 节点、起始节点样式配置

\-🌸 节点两侧线段中间显示添加点配置

\-🌸 自动闭合路径配置

#### 🌷 感谢反馈

@小志

## 2025 / 11 / 25

> v1.0.0-alpha

依赖于 LeaferJS [ v1.11.1](https://www.leaferjs.com/ui/update/#_2025-11-25)

#### 🌱 上线首个版本
