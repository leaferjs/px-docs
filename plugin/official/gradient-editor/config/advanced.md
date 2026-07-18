<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/official/gradient-editor/config/basic.md) &nbsp; &nbsp; 高级

## 关键属性

### gradientEditBox: [`IEditorConfig`](https://www.leaferjs.com/ui/plugin/in/editor/config/base.html)

渐变编辑框的配置。

### editBox: [`IEditorConfig`](https://www.leaferjs.com/ui/plugin/in/editor/config/base.html)

默认图形编辑器的覆盖配置（仅在打开渐变编辑器期间有效）。

## 示例

### 配置渐变编辑框的控制点和线

```ts
// #渐变编辑 [配置渐变编辑框的控制点和线]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/state' // 导入状态插件
import '@leafer-in/animate' // 导入状态插件
import '@leafer-in/color' // 导入颜色插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)


import '@pxgrow/gradient-editor' // 导入渐变编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        GradientEditor: {
            gradientEditBox: { // 配置渐变编辑框 // [!code hl:6]
                pointSize: 14,
                point: { fill: '#0d99ff', strokeWidth: 0, shadow: { x: 0, y: 0, blur: 5, color: 'rgba(0,0,0,0.3)' } }, // 控制点
                rect: { stroke: '#0d99ff', shadow: { x: 0, y: 0, blur: 5, color: 'rgba(0,0,0,0.2)' } }, // 控制线
            },
            colorBoxOffset: 6 // 颜色框偏移
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    editable: true,
    editInner: 'GradientEditor', // 指定内部编辑器
    fill: {
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027', '#79CB4D', '#FF4B4B']
    }
})

app.tree.add(rect)

// 模拟双击元素打开渐变编辑器
setTimeout(() => {
    app.editor.openInnerEditor(rect, true)
}, 600)

```
