//#图形编辑器[简洁创建]
import { App, Rect, Debug } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 //
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入视口插件 (可选)
import { Linker } from '@leafer-in/linker' // 导入视口插件 (可选)
import '@leafer-in/arrow' // 导入视口插件 (可选)
import '@leafer-in/scale-fixed' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入视口插件 (可选)

const app = new App({
    view: window,
    fill: '#222',
    editor: {}  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

Debug.showRepaint = true

app.tree.cacheId = true
app.tree.cacheInnerId = true
console.log(app)

const rect1 = Rect.one({ id: '2', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
const rect2 = Rect.one({ id: '3', editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)

app.tree.add(rect1)
app.tree.add(rect2)

const linker = new Linker({
    stroke: '#836DFF',
    strokeWidth: 2,
    // strokeWidthFixed: 0.2,
    strokeScaleFixed: 1,
    editable: true,
    // startArrow: 'arrow',
    startPoint: { id: '2', }, //point: 'center' direction: 'center',  direction: 'center',
    endPoint: { id: '3', }, // { point: { x: 500, y: 300 } }, //  { x: 500, y: 600 }scaleFixed: 0.5,  point: 'top-left', offset: { x: 20, y: 20 }
    endArrow: 'arrow'
})

app.tree.add(linker, 0)

// setTimeout(() => {
//     linker.endPoint = { point: { x: 500, y: 300 } }
// }, 2000)