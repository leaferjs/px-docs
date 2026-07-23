// #Ruler [设置标尺单位]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import { ScrollBar } from '@leafer-in/scroll'  // 导入滚动条插件 (可选)

import { Ruler } from '@leafer-in/ruler' // 导入标尺插件 // [!code hl]

const app = new App({
    view: window,
    fill: '#333',
    pointSnap: true,
    editor: {},
})

const ruler = new Ruler(app, {
    unit: 'px', // 支持 'px' | 'in' | 'cm' | 'mm' | 'm' | 'pt' | 'pc' 等单位，可设置单位对象: { type: 'mm', px: 96 / 25.4 }  // [!code hl]
    fill: '#333', // 标尺的填充色，只能为字符串
    stroke: '#888', // 标尺的刻度、字体颜色
})

new ScrollBar(app, { theme: 'dark', padding: [10, 0, 0, 10] })

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))


// 修改标尺单位 // [!code hl:16]
setTimeout(() => {
    ruler.changeConfig({ unit: 'mm' })

    // 提供单位转换方法
    // console.log(ruler.config.unit)
    console.log(ruler.pxToUnit(96)) // 像素转换为mm
    console.log(ruler.unitToPx(25.4)) // mm转换为像素

    setTimeout(() => {
        ruler.changeConfig({ unit: { type: '', px: 1 } }) // 不显示名称的 px 单位
    }, 1500)

}, 1500)



/* 常用的单位对象
const units = {
    // Pixel（像素）
    px: { type: 'px', px: 1 },

    // Inch（英寸）
    in: { type: 'in', px: 96 },

    // Centimeter（厘米）
    cm: { type: 'cm', px: 96 / 2.54 },

    // Millimeter（毫米）
    mm: { type: 'mm', px: 96 / 25.4 },

    // Meter (米)
    m: { type: 'm', px: 96 / 2.54 * 100 },

    // Point（点）
    pt: { type: 'pt', px: 96 / 72 },

    // Pica（派卡）
    pc: { type: 'pc', px: 96 / 6 }
}

console.log(units)
*/