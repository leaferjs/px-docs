// #使用 fill 代替 url (Leafer)
import { Leafer, Rect } from 'leafer-ui'

import '@leafer-in/image-filter'
import { ImageLighter } from '@pxgrow/image-lighter'

const leafer = new Leafer({ view: window })

new ImageLighter(leafer)

const rect = new Rect({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        filter: [
            { type: 'exposure', value: 1 },
            // { type: 'contrast', value: 1 },
            // { type: 'saturation', value: -1 },
            // { type: 'temperature', value: 1 },
            // { type: 'tint', value: 0.5 },
            // { type: 'highlights', value: 1 },
            // { type: 'shadows', value: 1 },
        ],
        mode: 'stretch'
    },
    draggable: true
})

leafer.add(rect)