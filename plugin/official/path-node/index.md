<script setup>
import Case from '/component/Case.vue'
</script>

# Path Node

Path Node —— 通用路径节点功能。

[Path Editor 插件](../path-editor/index.md)、[Linker Editor 插件](../linker-editor/index.md)、[Points Editor 插件](../linker-editor/index.md) 的基础依赖插件，用于实现显示、选中、移动、删除节点等功能。

## 📆 更新日志

当前为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10021) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-path-node-1.0.1.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-path-node-1.0.1.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-path-node-1.0.1.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-path-node-1.0.1.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-path-node-1.0.1.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/path-node": "file:pxgrow/pxgrow-path-node-1.0.1.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.pathNode 访问插件内部功能。

需解压 `pxgrow-path-node-1.0.1.tgz` 文件，复制 `package/dist/path-node.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/path-node.js"></script>
<script>
  const { PathNodeEditor, PathNode } = PxGrow.pathNode
</script>
```

:::
