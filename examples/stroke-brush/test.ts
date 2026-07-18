// #Stroke Brush [Line 曲线]
import { App, Path, Group, Image } from 'leafer-ui' //
import '@leafer-in/editor' // 导入图形编辑器插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@pxgrow/path-editor' // 导入路径编辑插件 (可选)
import { ImageLighter } from '@pxgrow/image-lighter' // 导入图片加速插件 (建议，可选)

import '@pxgrow/stroke-brush'
// import '../../pxgrow/packages/stroke-brush/dist/stroke-brush.esm.js'
import { BrushImage, StrokeBrushHelper } from '@pxgrow/stroke-brush' // 导入图标笔刷插件 // [!code hl]

const app = new App({ view: window, editor: { editBoxType: 'stroke', PathEditor: { showAddPoint: true } } }) //

new ImageLighter(app.tree, {
    recycleLevels: true,
    tileSize: 1024,
    tileSVG: true
})




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
    hitFill: 'pixel',
    "stroke": [
        {
            "type": "image",
            url: '/svg/brush/r2.svg',
            //"url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9Il/lm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYJfMiIgdmlld0JveD0iMCAwIDcxLjg2NjE0IDcxLjg2NjE0IiB3aWR0aD0iNzEuODY2MTQiIGhlaWdodD0iNzEuODY2MTQiPgogICAgPG1ldGFkYXRhIHhtbG5zPSIiPiAKICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbj4gCiAgICAgICAgICA8c2NoZW1hOmxpY2Vuc2UgeG1sbnM6c2NoZW1hPSJodHRwOi8vc2NoZW1hLm9yZy8iPiAKICAgICAgICAgICAgaHR0cHM6Ly93d3cuc2NpcGl4YS5jb20vbGljZW5zZS9jb250ZW50IAogICAgICAgICAgPC9zY2hlbWE6bGljZW5zZT4gCiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+IAogICAgICA8L3JkZjpSREY+IAogICAgPC9tZXRhZGF0YT4KICAgIDxtZXRhZGF0YSB4bWxucz0iIj4gCiAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IAogICAgICAgIDxyZGY6RGVzY3JpcHRpb24+IAogICAgICAgICAgPHNjaGVtYTpsaWNlbnNlIHhtbG5zOnNjaGVtYT0iaHR0cDovL3NjaGVtYS5vcmcvIj4gCiAgICAgICAgICAgIGh0dHBzOi8vd3d3LnNjaXBpeGEuY29tL2xpY2Vuc2UvY29udGVudCAKICAgICAgICAgIDwvc2NoZW1hOmxpY2Vuc2U+IAogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPiAKICAgICAgPC9yZGY6UkRGPiAKICAgIDwvbWV0YWRhdGE+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzk4OWNlNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogLjJweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjMTcxYzYxOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZDZkOGZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iX+WbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCXzEiPgogICAgPGcgaWQ9Il/nq4vmlrnkuIrnmq7nu4bog54xX3hGRjA4X+W5s+mdol94RkYwQ1/nroDljJZfeEZGMDlfIiBkYXRhLW5hbWU9Iueri+aWueS4iuearue7huiDnjFfeEZGMDhf5bmz6Z2iX3hGRjBDX+eugOWMll94RkYwOV8iPgogICAgICA8cmVjdCBpZD0iX+aEjy3mj4/ovrkiIGRhdGEtbmFtZT0i5oSPLeaPj+i+uSIgY2xhc3M9ImNscy0zIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSI3MC44NjYxNCIgaGVpZ2h0PSI3MC44NjYxNCIgcng9IjE5Ljg0MjUyIiByeT0iMTkuODQyNTIiLz4KICAgICAgPHJlY3QgaWQ9Il/mhI8t57uG6IOe6LSoIiBkYXRhLW5hbWU9IuaEjy3nu4bog57otKgiIGNsYXNzPSJjbHMtNCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzAuODY2MTQiIGhlaWdodD0iNzAuODY2MTQiIHJ4PSIxOS44NDI1MiIgcnk9IjE5Ljg0MjUyIi8+CiAgICAgIDxyZWN0IGlkPSJf5oSPLee7huiDnuiGnCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe6IacIiBjbGFzcz0iY2xzLTIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjcwLjg2NjE0IiBoZWlnaHQ9IjcwLjg2NjE0IiByeD0iMTkuODQyNTIiIHJ5PSIxOS44NDI1MiIvPgogICAgICA8Y2lyY2xlIGlkPSJf5oSPLee7huiDnuaguCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe5qC4IiBjbGFzcz0iY2xzLTEiIGN4PSIzNS45MzMwNyIgY3k9IjM1LjkzMzA3IiByPSIxMS44Nzg0NCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",
            "mode": "brush",
            bend: true,
            fidelity: 2, //  曲线分段精细度系数，默认为1， 设为4 基本就很平滑了，不过也会多消耗性能
            "opacity": 1,
            "scale": {
                x: 0.5,
                "y": -1
            },
            "gap": {
                "x": 0
            }
        }
    ],
    "strokeWidth": 20,
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

app.tree.add({
    "tag": "Frame",
    "fill": [
        {
            "type": "solid",
            "color": "#fff"
        }
    ],
    "overflow": "show",
    "solid": [],
    "shadow": [
        {
            "x": 0,
            "y": 2,
            "blur": 16,
            "color": "rgba(41, 48, 57, 0.08)"
        }
    ],
    "innerShadow": [],
    "width": 1745,
    "height": 835,
    "id": "d0547a7c-865f-4498-8520-afe0fc79b7d6",
    "name": "Page",
    "stroke": "#d0d9e6",
    "strokeWidth": 0.8,
    "data": {
        "pageId": "2072932500061274112",
        "canvasRatioPreset": "custom",
        "uuid": "b56db290-dd19-4c60-8aa7-3ee5f66b47be"
    },
    "states": {},
    "children": [
        {
            "tag": "Path",
            "strokeAlign": "center",
            "name": "双层膜（平直）",
            "zIndex": 11,
            "path": [
                1,
                632.8435,
                436.7113,
                7,
                811.2075,
                418.1533,
                835.7057,
                416.1992,
                7,
                860.2039,
                414.2451,
                880.3396,
                412.9939,
                7,
                900.4752,
                411.7427,
                967.763,
                407.8985,
                7,
                1035.0508,
                404.0543,
                1100.352,
                398.9572,
                7,
                1165.6531,
                393.8601,
                1189.7737,
                392.0304,
                7,
                1213.8942,
                390.2008,
                1286.5916,
                384.3513,
                7,
                1359.2889,
                378.5019,
                1415.1638,
                374.8379,
                7,
                1471.0387,
                371.1739,
                1494.8327,
                369.7319,
                7,
                1518.6266,
                368.2898,
                1538.7017,
                366.8842,
                7,
                1558.7768,
                365.4786,
                1576.9906,
                364.3933,
                7,
                1595.2045,
                363.308,
                1610.8735,
                362.5345,
                7,
                1626.5424,
                361.7609,
                1691.593,
                360.8361,
                7,
                1756.6435,
                359.9113,
                1756.6435,
                359.9113
            ],
            "editable": true,
            hitFill: 'pixel',
            "stroke": [
                {
                    "type": "image",
                    url: '/svg/brush/r2.svg',
                    // "url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9Il/lm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYJfMiIgdmlld0JveD0iMCAwIDU2LjY5MjkxIDguMzY1NCIgd2lkdGg9IjU2LjY5MjkxIiBoZWlnaHQ9IjguMzY1NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzg4YjZlYzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjNTU4ZGNmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iX+WbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCXzEiPgogICAgPGcgaWQ9Il/lj4zlsYLohpxfeEZGMDhf5bmz55u0X3hGRjA5XyIgZGF0YS1uYW1lPSLlj4zlsYLohpxfeEZGMDhf5bmz55u0X3hGRjA5XyI+CiAgICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeT0iLjQwMzA1IiB3aWR0aD0iNTYuNjkyOTEiIGhlaWdodD0iNy41NTkwNiIvPgogICAgICA8ZyBpZD0iX+aEjy3lj4zlsYLohpwiIGRhdGEtbmFtZT0i5oSPLeWPjOWxguiGnCI+CiAgICAgICAgPGcgaWQ9Il/mhI8t5Y+M5bGC6IacLTIiIGRhdGEtbmFtZT0i5oSPLeWPjOWxguiGnCI+CiAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSI1Ni42OTI5MSIgaGVpZ2h0PSIuODA2MzUiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9Il/mhI8t5Y+M5bGC6IacLTMiIGRhdGEtbmFtZT0i5oSPLeWPjOWxguiGnCI+CiAgICAgICAgICA8cmVjdCBjbGFzcz0iY2xzLTIiIHk9IjcuNTU5MDYiIHdpZHRoPSI1Ni42OTI5MSIgaGVpZ2h0PSIuODA2MzUiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==",
                    "mode": "brush",
                    "bend": true,
                    "fidelity": 2,
                    "opacity": 1,
                    "scale": {
                        x: 1,
                        "y": 1
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
                "MaterialType": "OFFICIAL_MATERIAL",
                "materialId": "",
                "outId": "",
                "boardOutId": "",
                "pageOutId": "",
                "isDraggedMaterial": true,
                "sourceId": 261,
                "blockSubmission": true,
                "blockSubmissionSource": "painterUpload",
                "uiOrderIds": [
                    "_意-双层膜",
                    "未知图层"
                ],
                "uiOrder": [
                    "意-双层膜",
                    "未知图层"
                ],
                "uuid": "70e43e1b-b374-45cb-9dad-1c60d038ad6c",
                "clipImgBrush": true
            },
            "editConfig": {
                "hoverStyle": {
                    "strokeWidth": 0
                }
            },
            "states": {}
        }
    ]
})


const image = new Image({
    x: 100,
    y: 100,
    url: '/svg/brush/r2.svg',
    scale: 3,
    hitFill: 'pixel',
    editable: true
})

app.tree.add(image)


// setInterval(() => {
//     line.strokeWidth = (line.strokeWidth as number + 1)
// }, 2000)


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
            hitFill: 'pixel',
            url: '/svg/brush/r2.svg',
            //"url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9Il/lm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYJfMiIgdmlld0JveD0iMCAwIDcxLjg2NjE0IDcxLjg2NjE0IiB3aWR0aD0iNzEuODY2MTQiIGhlaWdodD0iNzEuODY2MTQiPgogICAgPG1ldGFkYXRhIHhtbG5zPSIiPiAKICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbj4gCiAgICAgICAgICA8c2NoZW1hOmxpY2Vuc2UgeG1sbnM6c2NoZW1hPSJodHRwOi8vc2NoZW1hLm9yZy8iPiAKICAgICAgICAgICAgaHR0cHM6Ly93d3cuc2NpcGl4YS5jb20vbGljZW5zZS9jb250ZW50IAogICAgICAgICAgPC9zY2hlbWE6bGljZW5zZT4gCiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+IAogICAgICA8L3JkZjpSREY+IAogICAgPC9tZXRhZGF0YT4KICAgIDxtZXRhZGF0YSB4bWxucz0iIj4gCiAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IAogICAgICAgIDxyZGY6RGVzY3JpcHRpb24+IAogICAgICAgICAgPHNjaGVtYTpsaWNlbnNlIHhtbG5zOnNjaGVtYT0iaHR0cDovL3NjaGVtYS5vcmcvIj4gCiAgICAgICAgICAgIGh0dHBzOi8vd3d3LnNjaXBpeGEuY29tL2xpY2Vuc2UvY29udGVudCAKICAgICAgICAgIDwvc2NoZW1hOmxpY2Vuc2U+IAogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPiAKICAgICAgPC9yZGY6UkRGPiAKICAgIDwvbWV0YWRhdGE+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzk4OWNlNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogLjJweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjMTcxYzYxOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiAjZDZkOGZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iX+WbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCXzEiPgogICAgPGcgaWQ9Il/nq4vmlrnkuIrnmq7nu4bog54xX3hGRjA4X+W5s+mdol94RkYwQ1/nroDljJZfeEZGMDlfIiBkYXRhLW5hbWU9Iueri+aWueS4iuearue7huiDnjFfeEZGMDhf5bmz6Z2iX3hGRjBDX+eugOWMll94RkYwOV8iPgogICAgICA8cmVjdCBpZD0iX+aEjy3mj4/ovrkiIGRhdGEtbmFtZT0i5oSPLeaPj+i+uSIgY2xhc3M9ImNscy0zIiB4PSIuNSIgeT0iLjUiIHdpZHRoPSI3MC44NjYxNCIgaGVpZ2h0PSI3MC44NjYxNCIgcng9IjE5Ljg0MjUyIiByeT0iMTkuODQyNTIiLz4KICAgICAgPHJlY3QgaWQ9Il/mhI8t57uG6IOe6LSoIiBkYXRhLW5hbWU9IuaEjy3nu4bog57otKgiIGNsYXNzPSJjbHMtNCIgeD0iLjUiIHk9Ii41IiB3aWR0aD0iNzAuODY2MTQiIGhlaWdodD0iNzAuODY2MTQiIHJ4PSIxOS44NDI1MiIgcnk9IjE5Ljg0MjUyIi8+CiAgICAgIDxyZWN0IGlkPSJf5oSPLee7huiDnuiGnCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe6IacIiBjbGFzcz0iY2xzLTIiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjcwLjg2NjE0IiBoZWlnaHQ9IjcwLjg2NjE0IiByeD0iMTkuODQyNTIiIHJ5PSIxOS44NDI1MiIvPgogICAgICA8Y2lyY2xlIGlkPSJf5oSPLee7huiDnuaguCIgZGF0YS1uYW1lPSLmhI8t57uG6IOe5qC4IiBjbGFzcz0iY2xzLTEiIGN4PSIzNS45MzMwNyIgY3k9IjM1LjkzMzA3IiByPSIxMS44Nzg0NCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",
        })
        group.add(brush)
    })

    app.tree.add(group)

}, 1000)