# 数据库设计

## 概述

当前阶段使用 Mock 数据（`lib/api/client.ts` 内置），类型定义在 `lib/types.ts`。

## 核心数据模型

### Room（包厢）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 包厢 ID |
| `name` | string | 包厢名称（如"豪华包厢A"） |
| `type` | RoomType | 包厢类型：small / medium / large / vip / luxury |
| `status` | RoomStatus | 状态：available / occupied / reserved / cleaning / maintenance |
| `storeId` | string | 所属门店 |

### Order（订单）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 订单 ID |
| `orderNo` | string | 订单编号 |
| `storeId` | string | 所属门店 |
| `roomId` | string? | 关联包厢 |
| `customerId` | string? | 关联会员 |
| `items` | OrderItem[] | 订单项列表 |
| `totalAmount` | number | 总金额 |
| `discountAmount` | number | 折扣金额 |
| `paidAmount` | number | 实付金额 |
| `orderType` | OrderType | 订单类型：room_package / drink / food / other |
| `paymentType` | PaymentType | 支付方式：wechat / alipay / member_card / cash / card |
| `paymentStatus` | PaymentStatus | 支付状态：pending / paid / refunded |

### Product（商品）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 商品 ID |
| `name` | string | 商品名称 |
| `categoryId` | string | 分类 ID |
| `price` | number | 售价 |
| `memberPrice` | number | 会员价 |
| `costPrice` | number | 成本价 |
| `stock` | number | 库存数量 |
| `unit` | string | 单位 |
| `isGift` | boolean | 是否赠品 |
| `allowDiscount` | boolean | 是否允许折扣 |

### Member（会员）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 会员 ID |
| `cardNo` | string | 会员卡号 |
| `name` | string | 姓名 |
| `phone` | string | 手机号 |
| `level` | number | 等级（1-5） |
| `balance` | number | 余额 |
| `points` | number | 积分 |
| `totalConsumption` | number | 累计消费 |

### User（用户）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 用户 ID |
| `name` | string | 姓名 |
| `phone` | string | 手机号 |
| `role` | UserRole | 角色：admin / manager / cashier / waiter |
| `permissions` | Permission[] | 权限列表 |
| `storeId` | string | 所属门店 |

## 状态流转

### 包厢状态

```
available → occupied → checkout → cleaning → available
    ↓           ↓
reserved    maintenance → available
```

### 订单状态

```
pending → paid → (refunded | partial_refund)
```

## 后续扩展

当接入真实后端时：
1. `lib/api/client.ts` 中的 Mock 降级逻辑保留作为离线/开发模式
2. 设置 `NEXT_PUBLIC_API_BASE_URL` 指向后端 API
3. `lib/types.ts` 的类型定义可直接映射数据库 Schema
