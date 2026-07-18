// #Viewport Lighter [1万条路径流畅缩放]
import { IGroup } from '@leafer-ui/interface'
import { App, Polygon, Group } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 500 // 每个切片500条路径
})

createPaths(app.tree, 1) // 1万条路径

app.nextRender(() => {
    app.tree.zoom('fit')
})

function createPaths(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * Math.floor(i / column)
        view.add(group)
        create10000(group, 0, 0, `hsl(${i * 3},50%, 50%)`)
    }
}

function create10000(group: IGroup, startX: number, startY: number, color: string) {
    var y, path

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 100; j++) {
            if (j % 10 === 0) y += 10
            path = new Polygon()
            path.x = startX
            path.y = y
            path.fill = color
            path.curve = true
            path.points = [0, 9, Math.random() * 2, Math.random() * 3 + 3, Math.random() * 2 + 2, Math.random() * 3 + 5, Math.random() * 2 + 4, Math.random() * 2 + 2, Math.random() * 2 + 5, Math.random() * 2 + 3, Math.random() * 3 + 6, Math.random() * 1, Math.random() * 3 + 7, Math.random() * 3 + 6, Math.random() * 2 + 8, Math.random() * 3 + 6, 0, 9]
            path.editable = true
            group.add(path)
            y += 12
        }
        startX += 12
    }
}