// #阴影变形 [skew 倾斜变形]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/shadow'  // 导入阴影变形插件 // [!code hl]

const leafer = new Leafer({ view: window, fill: '#333' })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: [{
        blur: 20,
        color: '#000000AA',
        skew: { x: -90, y: 0 } // skew 倾斜变形 // [!code hl]
    },
    {
        blur: 30,
        color: '#FFFF0080',
        rotation: 145
    }]
})

leafer.add(rect)