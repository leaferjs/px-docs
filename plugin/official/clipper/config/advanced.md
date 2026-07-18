<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/official/clipper/config/basic.md) &nbsp; &nbsp; 高级

## 关键属性

### clipEditBox: [`IEditorConfig`](https://www.leaferjs.com/ui/plugin/in/editor/config/base.html)

裁剪框的配置。

### imageEditBox: [`IEditorConfig`](https://www.leaferjs.com/ui/plugin/in/editor/config/base.html)

图片框的配置。

### editBox: [`IEditorConfig`](https://www.leaferjs.com/ui/plugin/in/editor/config/base.html)

默认图形编辑器的覆盖配置（仅在打开裁剪编辑器期间有效）。

### dragLimit: `boolean`

有限范围内拖动，默认为 false。

### aroundClipBox: `boolean` | [`IAround`](https://www.leaferjs.com/ui/reference/UI/around.html)

图片是否围绕裁剪框中心旋转, 默认为 false。

<!-- ## 示例

### 拖拽控制点修改字体大小，拖拽边框控制文本宽高 -->
