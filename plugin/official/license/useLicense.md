---
pluginName: 授权插件
pluginId: 1
layout: auth-doc
---

<script setup>
import Case from '/component/Case.vue'
</script>

# useLicense

授权使用 license。

## 关键方法

### useLicense ( `string` | `string`[] )

授权使用 license（异步方法），支持传入一个或多个许可证书字符串。

建议授权完成再使用插件，避免产生错误。

## 示例

### 授权使用

```ts
import { useLicense } from '@pxgrow/license' // 导入license授权插件

// 建议App实例化前执行此授权函数，首次验证耗时40ms左右，缓存之后每次只需2ms快速验证
useLicense([

    // 将下载的 .license 许可证文件，用文本编辑器打开，复制内容到此处
    `复制您的 license 许可证内容到此处`, // 支持多个 license 文件统一授权

]).then((result) => {

    console.log('load license success', result)

}).catch(() => {

    console.log('load license error')

})

// useLicense(`复制 license 许可证内容到此处`)
```
