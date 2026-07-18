# Clipper 更新日志

[查看使用文档](./index.md)

## 2026 / 06 / 23

> v1.1.0

#### 🪲 修复

\- 🌸 限制拖拽范围时，移动裁剪框出区域回弹后，裁剪内容未更新的问题

#### 🌷 感谢反馈

@风

## 2026 / 03 / 11

> v1.0.8

#### 🪲 修复

\- 🌸 按住Shift键操作时，会退出内部编辑器的问题

#### 🌷 感谢反馈

@小志

## 2026 / 02 / 24

> v1.0.7

#### 🌱 新增

\-🌸 适配 film 动图裁剪

## 2026 / 01 / 29

> v1.0.6

兼容 LeaferJS [ v2.0.0](https://www.leaferjs.com/ui/update/#_2026-01-23)

## 2025 / 11 / 13

> v1.0.5

依赖于 LeaferJS [ v1.9.10](https://www.leaferjs.com/ui/update/#_2025-09-30)

#### 🪲 修复

\-🌸 裁剪模式下，图片放大到超级大之后，绘制原图未进行裁剪的问题

#### 🌷 感谢反馈

@Rainbow

## 2025 / 09 / 30

> v1.0.4

依赖于 LeaferJS [ v1.9.10](https://www.leaferjs.com/ui/update/#_2025-09-30)

#### 🌱 新增

\- 🌸 支持裁剪 Image、Line、Path 等支持 fill 属性的普通元素

#### 🪲 修复

\- 自动宽高的 SVG 图片裁剪后横向拉伸会模糊的问题

\- 应用配置 [对齐像素](https://www.leaferjs.com/ui/reference/config/app/base.md#对齐像素) 后，旋转裁剪图片会抖动的问题

#### 🌷 感谢反馈

@闰土 @Rainbow

## 2025 / 09 / 23

> v1.0.3

依赖于 LeaferJS [ v1.9.8](https://www.leaferjs.com/ui/update/#_2025-09-22)

#### 🪲 修复

\- 🌸 修复裁剪 SVG 元素后，再拉伸会模糊的问题

\- 🌸 修复应用使用了对齐像素后，裁剪图片会抖动的问题

#### 🌿 优化

\- 🌸 重置进入裁剪模式前的自定义控制点样式，防止污染裁剪框样式

#### 🌷 感谢反馈

@闰土 @Rainbow

## 2025 / 09 / 12

> v1.0.2

依赖于 LeaferJS [ v1.9.7](https://www.leaferjs.com/ui/update/#_2025-09-11)

#### 🌱 新增

\- 🌸 支持突出显示并置顶渲染裁剪元素，淡化其他元素

\- 🌸 支持移动裁剪框，拖拽裁剪框的边缘可移动裁剪框

#### 🌷 感谢反馈

@闰土

## 2025 / 09 / 08

> v1.0.1

#### 🌱 新增

\- 🌸 支持配置显示九宫格的水平线功能

\- 🌸 支持编辑 stroke 中的图片对象

\- 🌸 支持在 fill / stroke 中的多个图片对象中，优先编辑 editing 为 true 的对象

<!-- #### 🪲 修复 -->

#### 🌿 优化

\- 优化拖拽限制，裁剪框与图片均可限制

\- 简化内部配置对象，统一合并到 mergedConfig 中

🍃 API 变化 (重点关注)

\- 裁剪框配置 innerEditBox 改名为 clipEditBox，方便语义化理解

#### 🌷 感谢反馈

@CML

<!-- innerEditBox 改名为 clipEditBox

innerEditBoxConfig
TransformTool 改名为 clipTransformTool

ClipImage 改名为 ClipEditorImage
ClipImageTransformTool 改名为 ClipEditorImageTransformTool
 -->

## 2025 / 06 / 09

> v1.0.0

#### 🌱 上线首个版本

\- 🌸 双击 Rect 元素即进入裁剪模式

\- 🌸 支持裁剪框/图片的独立缩放、旋转、移动（含移动端手势）

\- 🌸 裁剪样式支持完全自定义，适配多种设计风格

\- 默认围绕裁剪框中心旋转，可配置旋转点与旋转对象

\- 支持边缘吸附与裁剪范围限制，提升用户操作精度
