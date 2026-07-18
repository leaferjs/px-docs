// #VectorLighter [创建 complex 元素]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { VectorLighter } from '@pxgrow/vector-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new VectorLighter(app.tree)

const image = new Image({
    x: 100,
    y: 100,
    url: '/image/leafer.jpg',
    editable: true,
    complex: true, // 创建 complex 元素，智能缓存加速  // [!code hl]
    innerShadow: [{
        x: 10,
        y: 5,
        blur: 20,
        color: '#FF0000AA'
    },
    {
        x: -20,
        y: -5,
        blur: 20,
        color: '#00FFFFAA'
    }]
})

app.tree.add(image)