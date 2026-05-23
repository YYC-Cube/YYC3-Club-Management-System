# YYC³ Club Management System

> KTV 前台收银与运维管理系统 | [club.yyc3.top](https://club.yyc3.top)

## 技术栈

![Next.js](https://img.shields.io/badge/Next.js-15.5.18-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![pnpm](https://img.shields.io/badge/pnpm-9-F69220?logo=pnpm)

## 功能模块

### 前台收银
- **包厢管理** — 实时状态看板、开房/结账/清洁/维修
- **POS 收银** — 快速点单、购物车、多支付方式

### 运维管理
- **经营看板** — 营收/订单/包厢利用率实时统计
- **报表分析** — 销售趋势、品类占比、会员消费分析
- **会员管理** — CRUD、等级体系、积分、余额
- **库存管理** — 进销存、预警、盘点
- **员工管理** — 员工档案、权限管理、组织架构
- **系统设置** — 门店、打印、支付、安全配置

## 快速开始

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

## 部署

GitHub Actions 自动部署到 GitHub Pages，自定义域名 `club.yyc3.top`。

```bash
pnpm build  # 静态导出到 out/
```

## 文档

详见 [docs/README.md](./docs/README.md)

## 项目结构

```
app/
├── (pos)/          # 前台收银
│   ├── rooms/      # 包厢管理
│   └── pos/        # POS 收银
└── (admin)/        # 运维管理
    ├── dashboard/  # 经营看板
    ├── reports/    # 报表分析
    ├── members/    # 会员管理
    ├── inventory/  # 库存管理
    ├── staff/      # 员工管理
    └── settings/   # 系统设置
```

## 许可

Private Repository — YYC³ Team
