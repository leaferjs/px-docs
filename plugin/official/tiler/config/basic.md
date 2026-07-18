<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### 基础 &nbsp; &nbsp; [高级](/plugin/official/tiler/config/advanced.md)

## 关键属性

### pointSize: `number`

平铺控制点大小，默认为 14。

### pointHeightScale: `number`

平铺控制点高度比例（相对 pointSize）, 默认为 0.3。

### pointColor?: [`IFill`](https://www.leaferjs.com/ui/reference/UI/fill.html)

平铺控制点的填充颜色。

### spread?: `number`

平铺框控制点与元素的间距，默认为 0。

### image?: [`IImageInputData`](https://www.leaferjs.com/ui/reference/display/Image.html)

图片的样式，只能设置边框、阴影等属性。

### imageMask: `string` | `boolean`

图片是否添加半透明覆盖遮罩层，可设置颜色值，默认为 `rgba(0,0,0,0.5)`。

<!--
### horizontalLine?: `boolean` | `ITilerEditorHorizontalLineConfig`

是否显示水平线，默认为 false。

设置为对象时，可细化水平线样式。

```ts
interface ITilerEditorHorizontalLineConfig {
  lines?: IPointData // x、y轴的线条数量，如 2*2, 3*3, 默认 2*2
  style?: ILineInputData // 线条样式
  hideOnActionEnd?: boolean | number // 操作结束时是否隐藏，设置数字表示延迟多少秒后隐藏，默认为2秒
}
``` -->
