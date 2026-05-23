# 快速开始

## 环境要求

- Node.js ≥ 20
- pnpm ≥ 9

## 安装

```bash
git clone git@github.com:YYC-Cube/YYC3-Club-Management-System.git
cd YYC3-Club-Management-System
pnpm install
```

## 开发

```bash
pnpm dev
# 访问 http://localhost:3000
```

## 构建

```bash
pnpm build
# 静态导出到 out/ 目录
```

## 项目结构

```
club-system/
├── app/
│   ├── (pos)/          # 前台收银模块
│   │   ├── rooms/      # 包厢管理
│   │   └── pos/        # POS 收银
│   ├── (admin)/        # 运维管理模块
│   │   ├── dashboard/  # 经营看板
│   │   ├── reports/    # 报表分析
│   │   ├── members/    # 会员管理
│   │   ├── inventory/  # 库存管理
│   │   ├── staff/      # 员工管理
│   │   └── settings/   # 系统设置
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 重定向到 /rooms
├── components/         # UI 组件
│   ├── ui/             # shadcn/ui 基础组件
│   ├── layout/         # 布局组件
│   ├── pos/            # POS 组件
│   ├── room/           # 包厢组件
│   ├── reports/        # 报表组件
│   └── ...             # 业务组件
├── lib/                # 工具库
│   ├── api/            # API 客户端
│   ├── stores/         # Zustand 状态管理
│   ├── types.ts        # 类型定义
│   └── utils.ts        # 工具函数
├── styles/globals.css  # Tailwind v4 全局样式
└── public/             # 静态资源 + CNAME
```

## 技术栈

| 技术 | 版本 | 说明 |
|---|---|---|
| Next.js | 15.5.18 | App Router + 静态导出 |
| React | 19.2 | Server/Client Components |
| TypeScript | 5 | 严格模式 |
| Tailwind CSS | 4 | oklch 色彩空间 |
| shadcn/ui | new-york | Radix UI 基础 |
| Zustand | 5 | 状态管理 |
| Recharts | 3 | 数据可视化 |
| Framer Motion | 12 | 动画 |
