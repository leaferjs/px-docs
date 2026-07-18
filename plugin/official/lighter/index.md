<script setup>
import Case from '/component/Case.vue'
</script>

# lighter

光速引擎。

## 📆 更新日志

当前为 v1.0.0-beta，[查看更新日志](./update.md)。

## 📦 安装插件（本地安装）

本插件不发布于公开 NPM 仓库，通过本地 `.tgz` 文件安装使用，需 [获取插件](https://www.pxgrow.com/plugin/view/?id=10003) 授权后才能使用。

### 第一步：获取插件包

购买后，你将获得一个名为 `pxgrow-lighter-1.0.0-beta.tgz` 的安装包。

将该文件放置在你的项目根目录下的 `pxgrow` 文件夹中统一管理，安装后请勿删除。

### 第二步：本地安装命令

根据你使用的包管理器，选择以下方式之一：

::: code-group

```sh [npm]
npm install ./pxgrow/pxgrow-lighter-1.0.0-beta.tgz
```

```sh [pnpm]
pnpm add ./pxgrow/pxgrow-lighter-1.0.0-beta.tgz
```

```sh [yarn]
yarn add ./pxgrow/pxgrow-lighter-1.0.0-beta.tgz
```

```sh [bun]
bun add ./pxgrow/pxgrow-lighter-1.0.0-beta.tgz
```

:::

将在 package.json 中自动增加本地依赖:

`"@pxgrow/lighter": "file:pxgrow/pxgrow-lighter-1.0.0-beta.tgz"`

---

或通过 script 标签引入，使用全局变量 PxGrow.lighter 访问插件内部功能。

需解压 `pxgrow-lighter-1.0.0-beta.tgz` 文件，复制 `package/dist/lighter.js` 使用。

::: code-group

```html [web]
<script src="/lib/pxgrow/lighter.js"></script>
<script>
  const { lighter } = PxGrow.lighter
</script>
```

:::

## 关键方法

### lighter ( )

实例化光速一起闹。

## 示例
