# FAQ

## 开发环境

### Q: 启动报错 `Cannot find module '@radix-ui/xxx'`

```bash
pnpm install
```

### Q: 样式不生效

确保 `styles/globals.css` 存在且 `app/layout.tsx` 中正确导入：
```typescript
import "../styles/globals.css"
```

### Q: 如何切换 Mock/真实 API

修改 `lib/api/client.ts` 中的构造函数参数或设置环境变量：
```bash
NEXT_PUBLIC_API_BASE_URL=http://your-api-server/api pnpm dev
```

## 构建

### Q: 静态导出报错 `Error: Dynamic server usage`

静态导出不支持 `redirect()`、`cookies()`、`headers()` 等动态 API。页面中使用客户端路由替代：
```tsx
"use client"
import { useRouter } from "next/navigation"
```

### Q: GitHub Pages 部署后 404

检查：
1. 仓库 Settings → Pages → Source 是否选择了 **GitHub Actions**
2. `public/CNAME` 文件是否包含 `club.yyc3.top`
3. DNS CNAME 是否指向 `yyc-cube.github.io`

### Q: GitHub Actions 构建失败

常见原因：
- `pnpm-lock.yaml` 未提交或与 `package.json` 不同步 → 运行 `pnpm install` 后重新提交
- TypeScript 类型错误 → 本地先 `pnpm build` 验证

## 路由

### Q: Route Group `(pos)` / `(admin)` 会出现在 URL 中吗？

不会。Next.js Route Group `(xxx)` 仅做代码组织，不影响 URL 路径。

### Q: 如何添加新路由页面

见 [开发指南](./DEVELOPMENT_GUIDE.md#添加新页面)
