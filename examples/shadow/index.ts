// #阴影变形 [skew 倾斜变形]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/shadow'  // 导入阴影变形插件 // [!code hl]

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
        skew: { x: -90, y: 0 },  // skew 倾斜变形 // [!code hl]
        scale: { x: 1, y: 0.5 }
    }]
})

leafer.add(rect)