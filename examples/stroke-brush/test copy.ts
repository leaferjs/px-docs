// #Stroke Brush [Line 曲线]
import { App, Path, Group } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush'
import { BrushImage, StrokeBrushHelper } from '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { PathEditor: { showAddPoint: true } } })

new ImageLighter(app.tree, {})

const line = new Path({
    x: -500,
    "tag": "Path",
    "strokeAlign": "center",
    "name": "图层2",
    "zIndex": 111,
    "path": [
        1,
        1054.86,
        430.97,
        5,
        1098.48,
        424.87,
        1137.61,
        400.48,
        1137.61,
        352.97,
        5,
        1137.61,
        315.1,
        1137.61,
        223.63,
        1137.61,
        187.04,
        5,
        1137.61,
        153.5,
        1163.9,
        126.06,
        1191.16,
        126.06,
        5,
        1218.42,
        126.06,
        1244.7,
        153.5,
        1244.7,
        187.04,
        5,
        1244.7,
        223.63,
        1244.7,
        315.1,
        1244.7,
        352.97,
        5,
        1244.7,
        400.48,
        1283.84,
        424.87,
        1327.45,
        430.97
    ],
    "editable": true,
    "stroke": [
        {
            "type": "image",
            url: '/svg/brush/n1.svg',
            //"url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9Il/lm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYJfMiIgdmlld0JveD0iMCAwIDcxLjg2NjE0IDcxLjg2NjE0IiB3aWR0aD0iNzEuODY2MTQiIGhlaWdodD0iNzEuODY2MTQiPgogICAgPG1ldGFkYXRhIHhtbG5zPSIiPiAKICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbj4gCiAgICAgICAgICA8c2NoZW1hOmxpY2Vuc2UgeG1sbnM6c2NoZW1hPSJodHRwOi8vc2NoZW1hLm9yZy8iPiAKICAgICAgICAgICAgaHR0cHM6Ly93d3cuc2NpcGl4YS5jb20vbGljZW5zZS9jb250ZW50IAogICAgICAgICAgPC9zY2hlbWE6bGljZW5zZT4gCiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+IAogICAgICA8L3JkZjpSREY+IAogICAgPC9tZXRhZGF0YT4KICAgIDxtZXRhZGF0YSB4bWxucz0iIj4gCiAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IAogICAgICAgIDxyZGY6RGVzY3JpcHRpb24+IAogICAgICAgICAgPHNjaGVtYTpsaWNlbnNlIHhtbG5zOnNjaGVtYT0iaHR0cDovL3NjaGVtYS5vcmcvIj4gCiAgICAgICAgICAgIGh0dHBzOi8vd3d3LnNjaXBpeGEuY29tL2xpY2Vuc2UvY29udGVudCAKICAgICAgICAgIDwvc2NoZW1hOmxpY2Vuc2U+IAogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPiAKICAgICAgPC9yZGY6UkRGPiAKICAgIDwvbWV0YWRhdGE+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzk4OWNlNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogLjJweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjMTcxYzYxOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZDZkOGZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iX+WbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCXzEiPgogICAgPGcgaWQ9Il/nq4vmlrnkuIrnmq7nu4bog54xX3hGRjA4X+W5s+mdol94RkYwQ1/nroDljJZfeEZGMDlfIiBkYXRhLW5hbWU9Iueri+aWueS4iuearue7huiDnjFfeEZGMDhf5bmz6Z2iX3hGRjBDX+eugOWMll94RkYwOV8iPgogICAgICA8cmVjdCBpZD0iX+aEjy3mj4/ovrkiIGRhdGEtbmFtZT0i5oSPLeaPj+i+uSIgY2xhc3M9ImNscy0zIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSI3MC44NjYxNCIgaGVpZ2h0PSI3MC44NjYxNCIgcng9IjE5Ljg0MjUyIiByeT0iMTkuODQyNTIiLz4KICAgICAgPHJlY3QgaWQ9Il/mhI8t57uG6IOe6LSoIiBkYXRhLW5hbWU9IuaEjy3nu4bog57otKgiIGNsYXNzPSJjbHMtNCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzAuODY2MTQiIGhlaWdodD0iNzAuODY2MTQiIHJ4PSIxOS44NDI1MiIgcnk9IjE5Ljg0MjUyIi8+CiAgICAgIDxyZWN0IGlkPSJf5oSPLee7huiDnuiGnCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe6IacIiBjbGFzcz0iY2xzLTIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjcwLjg2NjE0IiBoZWlnaHQ9IjcwLjg2NjE0IiByeD0iMTkuODQyNTIiIHJ5PSIxOS44NDI1MiIvPgogICAgICA8Y2lyY2xlIGlkPSJf5oSPLee7huiDnuaguCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe5qC4IiBjbGFzcz0iY2xzLTEiIGN4PSIzNS45MzMwNyIgY3k9IjM1LjkzMzA3IiByPSIxMS44Nzg0NCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",
            "mode": "brush",
            //  bend: false,
            "opacity": 1,
            "scale": {
                "y": -1
            },
            "gap": {
                "x": 0
            }
        }
    ],
    "strokeWidth": 30,
    "strokeCap": "round",
    "strokeJoin": "round",
    "cornerRadius": 25,
    "data": {
    },
    "editConfig": {
        "hoverStyle": {
            "strokeWidth": 0
        }
    },
    "states": {}
})

app.tree.add(line)


//解散笔刷成 BrushImage
setTimeout(() => {

    //line.rotation = 30

    //line.resizeHeight(100)

    //console.log(line.height)

    const geometryList = StrokeBrushHelper.ungroupGeometry(line) // 解散笔刷成独立的几何数据  // [!code hl]



    const group = new Group({ x: -600, y: 300, hitChildren: false, editable: true })

    //console.log(geometryList)

    geometryList.forEach(item => {
        const brush = new BrushImage({ // [!code hl:6]
            points: item.vertices, // 几何顶点 [x1,y1,x2,y2...]
            uvs: item.uvs, // 几何uv贴图数据, 与顶点数据对应 [u1,v1,u2,v2...]
            editable: true,
            url: '/svg/brush/n1.svg',
            // "url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9Il/lm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYJfMiIgdmlld0JveD0iMCAwIDcxLjg2NjE0IDcxLjg2NjE0IiB3aWR0aD0iNzEuODY2MTQiIGhlaWdodD0iNzEuODY2MTQiPgogICAgPG1ldGFkYXRhIHhtbG5zPSIiPiAKICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbj4gCiAgICAgICAgICA8c2NoZW1hOmxpY2Vuc2UgeG1sbnM6c2NoZW1hPSJodHRwOi8vc2NoZW1hLm9yZy8iPiAKICAgICAgICAgICAgaHR0cHM6Ly93d3cuc2NpcGl4YS5jb20vbGljZW5zZS9jb250ZW50IAogICAgICAgICAgPC9zY2hlbWE6bGljZW5zZT4gCiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+IAogICAgICA8L3JkZjpSREY+IAogICAgPC9tZXRhZGF0YT4KICAgIDxtZXRhZGF0YSB4bWxucz0iIj4gCiAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IAogICAgICAgIDxyZGY6RGVzY3JpcHRpb24+IAogICAgICAgICAgPHNjaGVtYTpsaWNlbnNlIHhtbG5zOnNjaGVtYT0iaHR0cDovL3NjaGVtYS5vcmcvIj4gCiAgICAgICAgICAgIGh0dHBzOi8vd3d3LnNjaXBpeGEuY29tL2xpY2Vuc2UvY29udGVudCAKICAgICAgICAgIDwvc2NoZW1hOmxpY2Vuc2U+IAogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPiAKICAgICAgPC9yZGY6UkRGPiAKICAgIDwvbWV0YWRhdGE+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzk4OWNlNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogLjJweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjMTcxYzYxOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZDZkOGZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iX+WbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCXzEiPgogICAgPGcgaWQ9Il/nq4vmlrnkuIrnmq7nu4bog54xX3hGRjA4X+W5s+mdol94RkYwQ1/nroDljJZfeEZGMDlfIiBkYXRhLW5hbWU9Iueri+aWueS4iuearue7huiDnjFfeEZGMDhf5bmz6Z2iX3hGRjBDX+eugOWMll94RkYwOV8iPgogICAgICA8cmVjdCBpZD0iX+aEjy3mj4/ovrkiIGRhdGEtbmFtZT0i5oSPLeaPj+i+uSIgY2xhc3M9ImNscy0zIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSI3MC44NjYxNCIgaGVpZ2h0PSI3MC44NjYxNCIgcng9IjE5Ljg0MjUyIiByeT0iMTkuODQyNTIiLz4KICAgICAgPHJlY3QgaWQ9Il/mhI8t57uG6IOe6LSoIiBkYXRhLW5hbWU9IuaEjy3nu4bog57otKgiIGNsYXNzPSJjbHMtNCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzAuODY2MTQiIGhlaWdodD0iNzAuODY2MTQiIHJ4PSIxOS44NDI1MiIgcnk9IjE5Ljg0MjUyIi8+CiAgICAgIDxyZWN0IGlkPSJf5oSPLee7huiDnuiGnCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe6IacIiBjbGFzcz0iY2xzLTIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjcwLjg2NjE0IiBoZWlnaHQ9IjcwLjg2NjE0IiByeD0iMTkuODQyNTIiIHJ5PSIxOS44NDI1MiIvPgogICAgICA8Y2lyY2xlIGlkPSJf5oSPLee7huiDnuaguCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe5qC4IiBjbGFzcz0iY2xzLTEiIGN4PSIzNS45MzMwNyIgY3k9IjM1LjkzMzA3IiByPSIxMS44Nzg0NCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",
        })
        group.add(brush)
    })

    app.tree.add(group)

}, 1000)