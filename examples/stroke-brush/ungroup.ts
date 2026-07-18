// #Stroke Brush [解散笔刷]
import { App, Group, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)
import { ViewportLighter } from '@pxgrow/viewport-lighter' // 导入视图缩放加速插件 (建议，可选)

import { BrushImage, StrokeBrushHelper } from '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: {} })

new ImageLighter(app.tree, {})
new ViewportLighter(app.tree, { sliceRender: 1 })

const ellipse = new Ellipse({
    x: 100,
    y: 50,
    width: 200,
    height: 200,
    editable: true,
    strokeWidth: 30,
    strokeAlign: 'center',
    stroke: [
        {
            type: 'image',
            url: '/image/leafer.jpg',
            mode: 'brush',
            gap: { x: 30 }
        }]
})

app.tree.add(ellipse)


// 解散笔刷成 BrushImage
setTimeout(() => {
    const geometryList = StrokeBrushHelper.ungroupGeometry(ellipse) // 解散笔刷成独立的几何数据  // [!code hl]

    const group = new Group({ x: 100, y: 300, hitChildren: false, editable: true })

    geometryList.forEach(item => {
        const brush = new BrushImage({ // [!code hl:6]
            points: item.vertices, // 几何顶点 [x1,y1,x2,y2...]
            uvs: item.uvs, // 几何uv贴图数据, 与顶点数据对应 [u1,v1,u2,v2...]
            editable: true,
            url: '/image/leafer.jpg'
        })
        group.add(brush)
    })

    app.tree.add(group)

}, 2000)