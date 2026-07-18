// #Shape Editor [切分 Ellipse 为两个半圆]
import { App, Ellipse, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)

import '@pxgrow/shape-editor'
import { EllipseEditTool } from '@pxgrow/shape-editor' // 导入形状编辑插件 // [!code hl]

const app = new App({
    view: window, editor: {
        editBoxType: 'stroke',
        spread: 10,
        EllipseEditTool: {
            innerPoint: { locked: true, cursor: 'row-resize' } // 内径控制点不能拖动，只能点击，点击后切分为两个半圆 // [!code hl]
        }
    }
})

const inputData = {
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    innerRadius: 1,
    closed: false,
    stroke: 'black',
    strokeAlign: 'center',
    strokeWidth: 20,
    editable: true
}

const ellipse = new Ellipse(inputData)

app.tree.add(ellipse)

// 模拟点击元素，显示编辑工具
setTimeout(() => {
    app.editor.select(ellipse);

    // 监听内径控制点的点击事件
    (app.editor.getEditTool('EllipseEditTool') as EllipseEditTool).innerRadiusPoint.on(PointerEvent.CLICK, () => {

        // 计算中心点角度
        let { startAngle, endAngle } = ellipse
        let innerAngle: number

        if (startAngle || endAngle) {
            if (endAngle < startAngle) endAngle += 360
            innerAngle = startAngle + (endAngle - startAngle) / 2
        } else {
            innerAngle = 180
            endAngle = 360
        }

        // 第一个半圆
        const ellipse1 = new Ellipse({
            ...inputData,
            y: 350,
            startAngle,
            endAngle: innerAngle
        })

        app.tree.add(ellipse1)

        // 第二个半圆
        const ellipse2 = new Ellipse({
            ...inputData,
            x: 350,
            y: 350,
            startAngle: innerAngle,
            endAngle
        })

        app.tree.add(ellipse2)

    })
}, 600)