// #Viewport Lighter [10万级矩形元素流畅缩放]
import { App, Rect, Group, IGroup } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 10000 // 每个切片1万个元素
})

create(app.tree, 10) // 创建10万个矩形

app.nextRender(() => {
    app.tree.zoom('fit')
})


function create(view: IGroup, num: number) {
    const groupSize = 10 * 100 * 1.5
    const column = num > 25 ? 10 : 5

    for (let i = 0; i < num; i++) {
        const group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * Math.floor(i / column)
        view.add(group)
        createRects(group, 0, 0, `hsl(${(i * 10) % 360},70%,50%)`)
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