// #Image Lighter [超大图流畅操作]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: 'gray' })

new ImageLighter(app.tree, {
    tileSize: 1024, // 瓦片大小，默认为 2048，表示 2048 * 2048 px，SVG 场景建议配小一点
    tileSVG: true  // SVG 放大时是否自动切片(瓦片），防止渲染大SVG原图卡住页面，默认为false
}) // 图片加速

const rect = new Rect({
    // width: 19666,
    // height: 13858,
    placeholderColor: 'white',
    fill: {
        type: 'image',
        //url: '/large/max.jpg',
        //url: '/image/super-large.png', // 原图为 20000 * 20000px 的超大图
        url: '/large/test.jpg',
        // url: '/large/max.svg',
        //url: '/test2.svg',
        mode: 'stretch',
        showProgress: 'gray'
    },
    editable: true
})

app.tree.add(rect)

// setTimeout(() => {
//     rect.destroy()
//     //ImageManager.clearLevels()
// }, 10000)

// setTimeout(() => {
//     rect.destroy()


//     const rect2 = new Rect({
//         // width: 19666,
//         // height: 13858,
//         placeholderColor: 'white',
//         fill: {
//             type: 'image',
//             //url: '/large/max.jpg',
//             //url: '/image/super-large.png', // 原图为 20000 * 20000px 的超大图
//             url: '/large/test.jpg',
//             // url: '/large/max.svg',
//             //url: '/test2.svg',
//             mode: 'stretch',
//             showProgress: 'gray'
//         },
//         editable: true
//     })

//     app.tree.add(rect2)

// }, 5000)

app.waitViewCompleted(() => {
    app.tree.zoom('fit')
})