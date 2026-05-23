# API 参考

## 客户端实例

```typescript
import { apiClient } from "@/lib/api/client"
```

## 认证

### `apiClient.login(username, password)`
登录认证，返回 token + user 信息。

### `apiClient.logout()`
登出，清除本地 token。

## 包厢管理

### `apiClient.getRooms(): Promise<ApiResponse<Room[]>>`
获取所有包厢列表。

### `apiClient.getRoomById(id: string): Promise<ApiResponse<Room>>`
获取单个包厢详情。

### `apiClient.updateRoomStatus(id, status, data?): Promise<ApiResponse<Room>>`
更新包厢状态。`status` 可选值：`available | occupied | reserved | cleaning | maintenance`

### `apiClient.startRoom(roomId, customerId?, packageId?): Promise<ApiResponse>`
开房操作，创建新订单并关联包厢。

### `apiClient.checkoutRoom(roomId): Promise<ApiResponse>`
结账操作。

## 订单管理

### `apiClient.getOrders(params?): Promise<ApiResponse<{ orders: Order[]; total: number }>>`
获取订单列表。

### `apiClient.createOrder(orderData): Promise<ApiResponse<Order>>`
创建新订单。

### `apiClient.updateOrder(id, orderData): Promise<ApiResponse<Order>>`
更新订单信息。

### `apiClient.addOrderItem(orderId, item): Promise<ApiResponse<OrderItem>>`
添加订单项。

## 商品管理

### `apiClient.getProducts(params?): Promise<ApiResponse<{ products: Product[]; total: number }>>`
获取商品列表。

### `apiClient.createProduct(productData): Promise<ApiResponse<Product>>`
创建商品。

### `apiClient.updateProduct(id, productData): Promise<ApiResponse<Product>>`
更新商品。

## 会员管理

### `apiClient.getMembers(params?): Promise<ApiResponse<{ members: Member[]; total: number }>>`
获取会员列表。

### `apiClient.getMemberByPhone(phone): Promise<ApiResponse<Member>>`
按手机号查询会员。

## 库存管理

### `apiClient.getInventory(warehouseId?): Promise<ApiResponse>`
获取库存列表。

### `apiClient.updateInventory(productId, warehouseId, quantity): Promise<ApiResponse>`
更新库存数量。

## 报表

### `apiClient.getSalesReport(startDate, endDate): Promise<ApiResponse>`
获取销售报表。

### `apiClient.getRoomUtilizationReport(startDate, endDate): Promise<ApiResponse>`
获取包厢利用率报表。

## 系统设置

### `apiClient.getSettings(): Promise<ApiResponse>`
获取系统设置。

### `apiClient.updateSettings(settings): Promise<ApiResponse>`
更新系统设置。

## Mock 数据

开发环境（`NODE_ENV=development`）自动使用 Mock 数据，无需后端。Mock 数据包含：
- 2 个包厢（豪华包厢A、标准包厢B）
- 2 个商品（青岛啤酒、果盘）
- 2 个会员（张三 VIP、李四 Gold）
- 1 个员工（王经理 manager）
