import { create } from "zustand"

interface Order {
  id: string
  roomId: string
  items: any[]
  total: number
  status: string
  createdAt: string
}

interface OrderState {
  orders: Order[]
  loading: boolean
  fetchOrders: () => Promise<void>
  createOrder: (order: Partial<Order>) => Promise<void>
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  loading: false,
  fetchOrders: async () => {
    set({ loading: true })
    set({
      loading: false,
      orders: [],
    })
  },
  createOrder: async (order: Partial<Order>) => {
    set((state) => ({
      orders: [...state.orders, { id: Date.now().toString(), roomId: "", items: [], total: 0, status: "pending", createdAt: new Date().toISOString(), ...order }],
    }))
  },
}))
