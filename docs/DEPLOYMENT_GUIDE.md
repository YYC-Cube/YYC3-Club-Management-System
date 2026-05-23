# 部署指南

## 自动部署（GitHub Actions）

项目已配置 CI/CD 自动部署到 GitHub Pages。

### 流程

```
push to main → GitHub Actions → pnpm build → 静态导出 → Deploy to Pages
```

### 工作流文件

`.github/workflows/deploy.yml`

1. **Checkout** 代码
2. **pnpm install** 安装依赖
3. **Type check** 类型检查
4. **pnpm build** 构建静态站点（`output: "export"`）
5. **写入 CNAME** `club.yyc3.top`
6. **Deploy to GitHub Pages**

### GitHub Pages 配置

仓库 Settings → Pages：
- **Source**: GitHub Actions
- **Custom domain**: `club.yyc3.top`
- **Enforce HTTPS**: ✅

### DNS 配置

在域名管理商添加 CNAME 记录：

```
CNAME  club  →  yyc-cube.github.io
```

## 手动部署

```bash
pnpm build
# out/ 目录包含所有静态文件
# 上传 out/ 内容到任意静态托管即可
```

## 构建配置

`next.config.mjs`:
```javascript
const nextConfig = {
  output: "export",  // 静态导出
  images: {
    unoptimized: true,  // 静态部署不支持图片优化
  },
}
```

## 环境变量

| 变量 | 说明 | 默认值 |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | API 地址 | `mock://localhost`（Mock 模式） |

静态导出不支持服务端环境变量，所有配置通过 `NEXT_PUBLIC_` 前缀在构建时注入。
