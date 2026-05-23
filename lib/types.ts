export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface User {
  id: string
  name: string
  phone: string
  role: UserRole
  storeId: string
  permissions: Permission[]
  createdAt: string
  updatedAt: string
}

export enum UserRole {
  ADMIN = "admin",
  MANAGER = "manager",
  CASHIER = "cashier",
  WAITER = "waiter",
}

export enum Permission {
  VIEW_ORDERS = "view_orders",
  CREATE_ORDERS = "create_orders",
  EDIT_ORDERS = "edit_orders",
  DELETE_ORDERS = "delete_orders",
  VIEW_PRODUCTS = "view_products",
  CREATE_PRODUCTS = "create_products",
  EDIT_PRODUCTS = "edit_products",
  DELETE_PRODUCTS = "delete_products",
  VIEW_WAREHOUSE = "view_warehouse",
  MANAGE_WAREHOUSE = "manage_warehouse",
  VIEW_REPORTS = "view_reports",
  EXPORT_REPORTS = "export_reports",
  VIEW_MEMBERS = "view_members",
  MANAGE_MEMBERS = "manage_members",
  VIEW_SETTINGS = "view_settings",
  MANAGE_SETTINGS = "manage_settings",
}

export interface Product {
  id: string
  name: string
  alias: string
  barcode: string[]
  categoryId: string
  unit: string
  originalPrice: number
  price: number
  memberPrice: number
  stock: number
  minStock: number
  costPrice: number
  images: string[]
  flavors: string[]
  isGift: boolean
  allowDiscount: boolean
  isSale: boolean
  isRecommend: boolean
  storeId: string
  createdAt: string
  updatedAt: string
}

export interface Order {
  id: string
  orderNo: string
  storeId: string
  roomId?: string
  customerId?: string
  items: OrderItem[]
  totalAmount: number
  discountAmount: number
  paidAmount: number
  orderType: OrderType
  paymentType: PaymentType
  paymentStatus: PaymentStatus
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  price: number
  totalAmount: number
  discountAmount: number
  isGift: boolean
}

export enum OrderType {
  ROOM_PACKAGE = "room_package",
  DRINK = "drink",
  FOOD = "food",
  OTHER = "other",
}

export enum PaymentType {
  WECHAT = "wechat",
  ALIPAY = "alipay",
  MEMBER_CARD = "member_card",
  CASH = "cash",
  CARD = "card",
}

export enum PaymentStatus {
  PENDING = "pending",
  PAID = "paid",
  REFUNDED = "refunded",
}

export interface Member {
  id: string
  cardNo: string
  name: string
  phone: string
  birthday?: string
  level: number
  balance: number
  points: number
  visitCount: number
  totalConsumption: number
  storeId: string
  createdAt: string
  updatedAt: string
}

export interface Room {
  id: string
  name: string
  type: RoomType
  status: RoomStatus
  storeId: string
}

export enum RoomType {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  VIP = "vip",
  LUXURY = "luxury",
}

export enum RoomStatus {
  AVAILABLE = "available",
  OCCUPIED = "occupied",
  RESERVED = "reserved",
  CLEANING = "cleaning",
  MAINTENANCE = "maintenance",
}
