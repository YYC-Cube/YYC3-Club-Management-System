import { create } from "zustand"

interface Room {
  id: string
  name: string
  status: string
  type: string
  price: number
  floor?: number
}

interface RoomState {
  rooms: Room[]
  loading: boolean
  fetchRooms: () => Promise<void>
  updateRoomStatus: (id: string, status: string) => Promise<void>
  startRoom: (id: string) => Promise<void>
  checkoutRoom: (id: string) => Promise<void>
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  loading: false,
  fetchRooms: async () => {
    set({ loading: true })
    set({
      loading: false,
      rooms: [
        { id: "1", name: "VIP-01", status: "available", type: "VIP", price: 580 },
        { id: "2", name: "VIP-02", status: "occupied", type: "VIP", price: 580 },
        { id: "3", name: "STD-01", status: "available", type: "标准", price: 280 },
        { id: "4", name: "STD-02", status: "maintenance", type: "标准", price: 280 },
      ],
    })
  },
  updateRoomStatus: async (id: string, status: string) => {
    set((state) => ({
      rooms: state.rooms.map((r) => (r.id === id ? { ...r, status } : r)),
    }))
  },
  startRoom: async (id: string) => {
    set((state) => ({
      rooms: state.rooms.map((r) => (r.id === id ? { ...r, status: "occupied" } : r)),
    }))
  },
  checkoutRoom: async (id: string) => {
    set((state) => ({
      rooms: state.rooms.map((r) => (r.id === id ? { ...r, status: "available" } : r)),
    }))
  },
}))
