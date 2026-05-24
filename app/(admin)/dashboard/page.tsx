"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, ShoppingBag, DollarSign, Users, Clock } from "lucide-react"
import { useRoomStore } from "@/lib/stores/useRoomStore"
import { useOrderStore } from "@/lib/stores/useOrderStore"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function AdminDashboard() {
  const { rooms, fetchRooms } = useRoomStore()
  const { orders, fetchOrders } = useOrderStore()

  useEffect(() => {
    fetchRooms()
    fetchOrders()
  }, [fetchRooms, fetchOrders])

  const stats = {
    totalRooms: rooms.length,
    availableRooms: rooms.filter((r) => r.status === "available").length,
    occupiedRooms: rooms.filter((r) => r.status === "occupied").length,
    totalOrders: orders.length,
    todayRevenue: orders.reduce((sum: number, order: any) => sum + (order.totalAmount || order.total || 0), 0),
  }

  const statCards = [
    { title: "包厢总数", value: stats.totalRooms, icon: Home, sub: `空闲 ${stats.availableRooms} | 占用 ${stats.occupiedRooms}` },
    { title: "今日订单", value: stats.totalOrders, icon: ShoppingBag, sub: "较昨日" },
    { title: "今日营收", value: `¥${stats.todayRevenue.toFixed(2)}`, icon: DollarSign, sub: "实时统计" },
    { title: "会员数", value: 128, icon: Users, sub: "活跃会员" },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">经营看板</h1>
        <Badge variant="outline" className="text-xs">
          <Clock className="h-3 w-3 mr-1" />
          实时
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, i) => (
          <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">{card.title}</CardTitle>
                <card.icon className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-slate-500 mt-1">{card.sub}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
