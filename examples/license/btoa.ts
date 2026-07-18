import { useLicense } from '@pxgrow/license' // 导入license授权插件

// 对license进行一次
const license = window.btoa(window.encodeURIComponent(
    // 将下载的 .license 许可证文件，用文本编辑器打开，复制内容到此处
    `复制您的 license 许可证内容到此处`, // 支持多个 license 文件统一授权
))

// 建议App实例化前执行此授权函数，首次验证耗时40ms左右，缓存之后每次只需2ms快速验证
useLicense([
    license, // 支持多个 license 文件统一授权
]).then((result) => {

    console.log('load license success', result)

}).catch(() => {

    console.log('load license error')

})

// useLicense(`复制 license 许可证内容到此处`)