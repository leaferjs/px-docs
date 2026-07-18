// #Tiler [自定义复杂样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@pxgrow/tiler' // 导入图片平铺插件 // [!code hl]

const app = new App({
    view: window, editor: {
        TileEditor: { // 图片平铺配置 // [!code hl:29]
            imageEditBox: { strokeWidth: 1, rect: { stroke: 'black', dashPattern: [4, 2] } }, // 模拟图片的编辑框，支持配置编辑器样式
            innerEditBox: { // 平铺编辑框，支持配置编辑器样式
                stroke: 'white',
                point: {
                    strokeWidth: 0,
                    shadow: {
                        x: 1,
                        y: 1,
                        blur: 6,
                        color: '#00000030'
                    }
                },
                middlePoint: {
                    width: 16, height: 6, cornerRadius: 3,
                    strokeWidth: 0,
                    shadow: {
                        x: 1,
                        y: 1,
                        blur: 6,
                        color: '#00000030'
                    }
                },
                rect: {
                    stroke: 'black',
                    strokeWidth: 2, // 平铺框默认没有描边宽度，需加上
                },
                spread: 0 // 平铺框默认扩展了一定的大小，设置0可还原
            }
        }
    }
})

const rect = new Rect({
    x: 100,
    y: 100,
    width: 500,
    editable: true,
    editInner: 'TileEditor', // 指定内部编辑器
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        gap: 10,
        scale: 0.6
    }
})

app.tree.add(rect)

// 模拟双击元素打开平铺编辑器
rect.on('image.loaded', () => {
    setTimeout(() => {
        app.editor.openInnerEditor(rect, true)
    }, 600)
})

// 访问平铺编辑器实例（仅平铺编辑器打开的情况下有效）
// const clipEditor = app.editor.innerEditor 