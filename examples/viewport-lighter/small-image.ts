// #Viewport Lighter [1万张不同的小图片流畅缩放]
import { IGroup } from '@leafer-ui/interface'
import { App, Image, Group, Resource } from 'leafer-ui'
import '@leafer-in/viewport'
import '@leafer-in/view'
import '@leafer-in/editor'

import { ViewportLighter } from '@pxgrow/viewport-lighter'  // [!code hl]

const app = new App({ view: window, editor: {} })

new ViewportLighter(app.tree, { // 加速 tree 层
    sliceRender: 500 // 每个切片500张图片
})

createImages(app.tree, 1) // 1万张小图片

app.nextRender(() => {
    app.tree.zoom('fit')
})


function createImages(view: IGroup, num: number) {
    var group
    var groupSize = 10 * 100 * 1.5
    var column = num > 25 ? 10 : 5

    for (var i = 0; i < num; i++) {
        group = new Group()
        group.x = groupSize * 1.2 * (i % column)
        group.y = groupSize * Math.floor(i / column)
        view.add(group)
        create10000(group, i, 0, 0, `hsl(${i * 3},50%, 50%)`)
    }
}

function create10000(group: IGroup, num: number, startX: number, startY: number, color: string) {
    var y, image

    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) startX += 10
        y = startY
        for (var j = 0; j < 100; j++) {
            if (j % 10 === 0) y += 10
            image = new Image(null)
            image.x = startX
            image.y = y
            image.height = 10
            image.width = 12
            image.editable = true
            createUrl(image, num * 10000 + i * 100 + j + 1, color)
            group.add(image)
            y += 12
        }
        startX += 12 + 2
    }
}


// 模拟不重复的图片
function createUrl(image: Image, count: number, color: string): void {
    setTimeout(() => {
        const canvas = new OffscreenCanvas(60, 50)
        const context = canvas.getContext('2d')

        context.fillStyle = color
        context.fillRect(0, 0, 60, 50)

        for (let i = 0; i < 10; i++) {
            context.fillStyle = `hsl(${Math.round(10 + Math.random() * 100)},70%,50%)`
            context.beginPath()
            context.arc(Math.random() * 60, Math.random() * 50, 1 + Math.random() * 10, 0, Math.PI * 2)
            context.fill()
        }

        context.fillStyle = 'rgba(255,255,255,0.8)'
        context.font = `bold 12px Arial`
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(count.toString(), 30, 25)

        const bitmap = canvas.transferToImageBitmap()
        image.fill = {
            type: 'image',
            mode: 'stretch',
            changeful: true,
            url: Resource.setImage('leafer://' + count + '.jpg', bitmap).url,
        }
    }, count * 2)
}