# 开发指南

## 编码规范

### 文件命名

- 页面：`app/(group)/feature/page.tsx`
- 组件：`components/category/component-name.tsx`（kebab-case）
- Store：`lib/stores/useFeatureStore.ts`（PascalCase + use 前缀）
- 工具：`lib/utils.ts` / `lib/hooks/use-feature.ts`

### 组件规范

```tsx
"use client"  // 客户端组件必须标注

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Room } from "@/lib/types"

interface RoomCardProps {
  room: Room
  onClick: (room: Room) => void
}

export default function RoomCard({ room, onClick }: RoomCardProps) {
  return <Button onClick={() => onClick(room)}>{room.name}</Button>
}
```

### 导入路径

使用 `@/` 别名（映射到项目根目录）：

```typescript
import { Button } from "@/components/ui/button"    // UI 组件
import { useRoomStore } from "@/lib/stores/useRoomStore"  // Store
import type { Room } from "@/lib/types"              // 类型
import { cn } from "@/lib/utils"                     // 工具函数
```

## 添加新页面

1. 在 `app/(pos)/` 或 `app/(admin)/` 下创建目录和 `page.tsx`
2. 在 `components/layout/app-layout.tsx` 的 `navItems` 数组中添加导航项
3. 如果需要状态管理，在 `lib/stores/` 创建 Zustand Store

### 示例：添加"促销管理"页面

```bash
# 1. 创建路由
mkdir -p app/(admin)/promotions
# 2. 创建页面
```

```tsx
// app/(admin)/promotions/page.tsx
"use client"
import PromotionManagement from "@/components/promotion/promotion-management"
export default function PromotionsPage() {
  return <PromotionManagement />
}
```

```tsx
// 在 app-layout.tsx 的 navItems 中添加:
{ id: "promotions", label: "促销管理", icon: Tags, href: "/promotions", group: "admin" }
```

## 添加新组件

1. UI 基础组件：`npx shadcn@latest add [component]`（new-york style）
2. 业务组件：在 `components/` 对应分类目录下创建

## 状态管理（Zustand）

```typescript
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface FeatureState {
  items: Item[]
  loading: boolean
  fetchItems: () => Promise<void>
}

export const useFeatureStore = create<FeatureState>()(
  persist(
    (set) => ({
      items: [],
      loading: false,
      fetchItems: async () => {
        set({ loading: true })
        const response = await apiClient.getItems()
        set({ items: response.data, loading: false })
      },
    }),
    { name: "feature-storage" }
  )
)
```

## 样式

### Tailwind v4

全局样式在 `styles/globals.css`：
```css
@import 'tailwindcss';
@import 'tw-animate-css';
@custom-variant dark (&:is(.dark *));
@theme inline { ... }
```

### 暗色主题

项目默认使用深色背景（`bg-slate-950`），通过 Tailwind 类直接控制，无需主题切换。

## 构建验证

```bash
pnpm build    # 构建并静态导出
```

构建成功后 `out/` 目录可直接部署。
