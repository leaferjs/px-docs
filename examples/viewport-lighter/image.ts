// #Viewport Lighter [3千张不同的图片流畅缩放]
import { IGroup } from '@leafer-ui/interface'
import { App, Image, Group, Resource } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 1000 // 每个切片1000张图片
})

createImages(app.tree, 1) // 3千张图片

app.nextRender(() => {
    app.tree.zoom('fit')
})


function createImages(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * (i % column)
        group.y = groupSize * 0.3 * Math.floor(i / column)
        view.add(group)
        createGroup(group, i, 0, 0, `hsl(${i * 3},60%,50%)`)
    }
}

function createGroup(group: IGroup, num: number, startX: number, startY: number, color: string) {
    var y, image

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 30; j++) {
            if (j % 10 === 0) y += 10
            image = new Image()
            image.x = startX
            image.y = y
            image.width = 10
            image.height = 3
            image.editable = true
            createUrl(image, num * 10000 + i * 30 + j + 1, color)
            group.add(image)
            y += 5
        }
        startX += 10 + 2
    }
}


// 模拟不重复的图片（每张1000 * 300px）
function createUrl(image: Image, count: number, color: string): void {
    setTimeout(() => {
        const canvas = new OffscreenCanvas(1000, 300)
        const context = canvas.getContext('2d')

        context.fillStyle = color
        context.fillRect(0, 0, 1000, 300)

        for (let i = 0; i < 10; i++) {
            context.fillStyle = `hsl(${Math.round(10 + Math.random() * 100)},70%,50%)`
            context.beginPath()
            context.arc(Math.random() * 1000, Math.random() * 300, 5 + Math.random() * 60, 0, Math.PI * 2)
            context.fill()
        }

        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.font = `bold 75px Arial`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(count.toString(), 500, 150)

        const bitmap = canvas.transferToImageBitmap()
        image.url = Resource.setImage('leafer://' + count + '.jpg', bitmap).url
    }, count * 5)
}