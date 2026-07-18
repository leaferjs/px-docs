<script setup>
import Case from '/component/Case.vue'
</script>

# License

license 许可证授权插件。

## 📆 更新日志

当前为 v1.0.6，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用， [购买高级插件](https://www.pxgrow.com/plugin/view/?id=10000) 后需搭配此授权插件才能使用。

### 第一步：获取插件包

购买高级插件后，进入 插件详情 > `获取 license 许可证` 页面，你将获得一个名为 `pxgrow-license-1.0.6.tgz` 的安装包 和 项目授权的 license 许可证文件。

将 `.tgz` 文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-license-1.0.6.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-license-1.0.6.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-license-1.0.6.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-license-1.0.6.tgz

```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/license": "file:pxgrow/pxgrow-license-1.0.6.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.license 访问插件内部功能。

需解压 `pxgrow-license-1.0.6.tgz` 文件，复制 `package/dist/license.js` 文件使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/license.js"></script>
<script>
  const { useLicense } = PxGrow.license
</script>
```

:::

## 下一步

### [授权使用 license](./useLicense.md)
