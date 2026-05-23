# 系统架构

## 概览

YYC³ Club Management System 是 KTV 前台收银与运维管理系统，采用 Next.js App Router 路由分组实现**前台收银**和**运维管理**两大模块的代码组织隔离。

## 路由架构

```
app/
├── page.tsx                → 客户端重定向到 /rooms
├── layout.tsx              → 根布局（AppLayout 侧边栏）
│
├── (pos)/                  → 前台收银 Route Group
│   ├── rooms/page.tsx      → 包厢状态看板 + 详情弹窗 + POS 入口
│   └── pos/page.tsx        → 独立 POS 收银终端
│
└── (admin)/                → 运维管理 Route Group
    ├── dashboard/page.tsx  → 经营数据看板（营收、订单、包厢利用率）
    ├── reports/page.tsx    → 报表分析（趋势图、品类占比、会员统计）
    ├── members/page.tsx    → 会员管理（CRUD、等级、积分、余额）
    ├── inventory/page.tsx  → 库存管理（进销存、预警、盘点）
    ├── staff/page.tsx      → 员工管理 + 权限 + 组织架构
    └── settings/page.tsx   → 系统设置（门店、打印、支付、安全）
```

Route Group `(pos)` 和 `(admin)` **不影响 URL**，仅做代码组织。所有页面共享同一套根布局。

## 布局系统

### AppLayout（`components/layout/app-layout.tsx`）

双模块导航布局：
- **左侧边栏**：双 Tab 切换（前台收银 / 运维管理）
- **顶部栏**：面包屑导航 + 通知/AI 助手按钮
- **主内容区**：渲染当前路由页面

### 侧边栏导航

```
前台收银 Tab:
  ├── 包厢管理  /rooms     [核心]
  └── 点单收银  /pos       [热门]

运维管理 Tab:
  ├── 经营看板  /dashboard
  ├── 报表分析  /reports
  ├── 会员管理  /members
  ├── 库存管理  /inventory
  ├── 员工管理  /staff
  └── 系统设置  /settings
```

## 状态管理

| Store | 文件 | 说明 |
|---|---|---|
| `useRoomStore` | `lib/stores/useRoomStore.ts` | 包厢状态 CRUD、开房、结账、状态流转 |
| `useOrderStore` | `lib/stores/useOrderStore.ts` | 订单 CRUD、订单项管理 |

两个 Store 均使用 Zustand + persist 中间件，通过 `apiClient` 与后端交互。

## API 客户端

`lib/api/client.ts` — 完整的 Mock API 客户端：

- 开发环境自动使用 Mock 数据（无后端依赖）
- 生产环境可通过 `NEXT_PUBLIC_API_BASE_URL` 指向真实 API
- Mock 降级：请求失败时自动回退到模拟数据

## 数据类型

`lib/types.ts` — 自包含类型定义：

| 类型 | 说明 |
|---|---|
| `Room` / `RoomStatus` / `RoomType` | 包厢数据 |
| `Order` / `OrderItem` / `OrderType` | 订单数据 |
| `Product` | 商品数据 |
| `Member` | 会员数据 |
| `User` / `UserRole` / `Permission` | 用户与权限 |
| `ApiResponse<T>` | 统一 API 响应 |
