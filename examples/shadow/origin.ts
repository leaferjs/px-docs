// #阴影变形 [设置 origin 变形中心点]
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
        color: '#FF0000AA',
        skew: { x: -60, y: 0 },
        origin: 'top' // 变形原点， 默认为bottom
    }, {
        blur: 20,
        color: '#00FF00AA',
        skew: { x: 60, y: 0 },
        origin: 'top'
    }]
})

leafer.add(rect)