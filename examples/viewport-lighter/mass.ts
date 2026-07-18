// #Viewport Lighter [优化二次大量创建元素的性能]
import { App, Rect, Group, IGroup, RenderEvent, Debug } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

const viewportLighter = new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 10000 // 每个切片1万个元素
})

app.tree.add(new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    draggable: true
}))

setTimeout(() => {
    Debug.enable = true
    Debug.filter = 'RunTime' // 控制台看 Layout 时间

    viewportLighter.preMassCreate() // 预备优化二次大量创建元素的性能，必须在下一次渲染前全部创建完成才能得到优化 // [!code hl]

    const startTime = Date.now()
    create(app.tree, 100) // 创建100万个矩形

    app.tree.once(RenderEvent.END, () => {
        app.tree.add({ tag: 'Text', x: 20, y: 20, text: `二次创建100万个矩形至渲染用时：` + (Date.now() - startTime) + '毫秒', fontWeight: 'bold', fontSize: 20 })
    })

}, 1000)


function create(view: IGroup, num: number) {
    const groupSize = 10 * 100 * 1.5
    const column = num > 25 ? 10 : 5

    for (let i = 0; i < num; i++) {
        const group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * Math.floor(i / column) + 100
        createRects(group, 0, 0, `hsl(${(i * 10) % 360},70%,50%)`)
        view.add(group)
    }
}

function createRects(group: IGroup, startX: number, startY: number, color: string) {
    let y, rect
    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (let j = 0; j < 100; j++) {
            if (j % 10 === 0) y += 10
            rect = new Rect()
            rect.x = startX
            rect.y = y
            rect.height = 10
            rect.width = 10
            rect.fill = color
            rect.editable = true
            group.add(rect)
            y += 12
        }
        startX += 12
    }
}