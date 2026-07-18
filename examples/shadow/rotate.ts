// #阴影变形 [rotate 旋转阴影]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/shadow' // 导入阴影变形插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: [{
        blur: 20,
        color: '#FF0000AA',
        rotation: -20 // rotate 旋转阴影 // [!code hl]
    },
    {
        blur: 20,
        color: '#00FF00AA',
        rotation: 20
    }]
})

leafer.add(rect)