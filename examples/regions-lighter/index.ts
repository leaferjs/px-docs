// #Regions Lighter [多个区域独立渲染]
import { App, Rect, Debug } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 //
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/animate' // 导入动画插件

import { RegionsLighter } from '@pxgrow/regions-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

const regionsLighter = new RegionsLighter(app.tree, { // 加速 tree 层  // [!code hl：5]
    regions: 20  // 最多支持多少个独立区域同时渲染，设为 1个 表示不开启，默认为 20
})

regionsLighter.config.regions = 3 // 可以随时修改配置，实时生效


let y: number, rect: Rect, startX = 0, startY = 0

for (let i = 0; i < 10; i++) {
    if (i % 10 === 0) startX += 50
    y = startY
    for (let j = 0; j < 2; j++) {
        if (j % 10 === 0) y += 50
        rect = new Rect(null)
        rect.x = startX
        rect.y = y
        rect.height = 50
        rect.width = 50
        rect.fill = `hsl(${i * j * 3},50%, 50%)`
        rect.editable = true
        if ((i % 2 && j % 2) || (i * j === 8)) {
            rect.origin = 'center'
            rect.animation = { keyframes: [{ rotation: 45 }, { rotation: 135, scale: 1.2 }], duration: 1, swing: true }
        }
        app.tree.add(rect)
        y += 70
    }
    startX += 70
}

Debug.showRepaint = true // 显示重绘框
