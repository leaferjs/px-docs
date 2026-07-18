
// #阴影变形 [skew 倾斜变形]
import { Leafer, Rect, Box, Debug } from 'leafer-ui'
import '@leafer-in/shadow'  // 导入阴影变形插件 // [!code hl]
import '@leafer-in/viewport'  // 导入阴影变形插件 // [!code hl]

Debug.showBounds = true

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Box({
    x: 200,
    y: 200,
    width: 100,
    height: 100,
    cornerRadius: 30,
    strokeWidth: 20,
    stroke: 'black',
    strokeAlign: 'outside',
    fill: 'rgba(50,205,121,0.7)',
    overflow: 'hide',
    children: [Rect.one({ fill: 'blue', draggable: true }, 0, 0, 20, 20)],
    //renderSpread: [0, 50],
    shadow: [

        {
            // x: 0,
            // y: 0,
            blur: 10,
            //box: true,
            // spread: 30,
            color: '#FF0000AA',
            skew: { x: 60, y: 0 },
            // rotation: 45,
            scale: { x: 1, y: 0.2 },
            // skewX: -60, // skew 倾斜变形 // [!code hl]
        },
        {
            x: 100,
            y: 100,
            blur: 20,
            spread: 0,
            box: true,
            color: '#FFFF00AA',
            skewX: -60, // skew 倾斜变形 // [!code hl]
        },
    ]
})

leafer.add(rect)