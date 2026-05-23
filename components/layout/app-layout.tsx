"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  CreditCard,
  BarChart3,
  Users,
  Package,
  Settings,
  ShoppingCart,
  Warehouse,
  ClipboardList,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Bot,
  Bell,
} from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon: any
  href: string
  group: "pos" | "admin"
  badge?: string | number
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { id: "rooms", label: "包厢管理", icon: Home, href: "/rooms", group: "pos", badge: "核心" },
  { id: "pos", label: "点单收银", icon: CreditCard, href: "/pos", group: "pos", badge: "热门" },
  { id: "dashboard", label: "经营看板", icon: BarChart3, href: "/dashboard", group: "admin" },
  { id: "reports", label: "报表分析", icon: ShoppingCart, href: "/reports", group: "admin" },
  { id: "members", label: "会员管理", icon: Users, href: "/members", group: "admin" },
  { id: "inventory", label: "库存管理", icon: Warehouse, href: "/inventory", group: "admin" },
  { id: "staff", label: "员工管理", icon: Package, href: "/staff", group: "admin" },
  { id: "settings", label: "系统设置", icon: Settings, href: "/settings", group: "admin" },
]

const posItems = navItems.filter((i) => i.group === "pos")
const adminItems = navItems.filter((i) => i.group === "admin")

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeGroup, setActiveGroup] = useState<"pos" | "admin">("pos")

  const isPosRoute = pathname === "/" || pathname.startsWith("/rooms") || pathname.startsWith("/pos")

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <aside
        className={`${sidebarOpen ? "w-60" : "w-16"} transition-all duration-300 bg-slate-900 border-r border-slate-800 flex flex-col`}
      >
        <div className="p-3 flex items-center justify-between border-b border-slate-800">
          {sidebarOpen && <span className="font-bold text-sm text-cyan-400">F-KTV</span>}
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex border-b border-slate-800">
          <button
            onClick={() => setActiveGroup("pos")}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              activeGroup === "pos" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {sidebarOpen ? "前台收银" : <CreditCard className="h-4 w-4 mx-auto" />}
          </button>
          <button
            onClick={() => setActiveGroup("admin")}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              activeGroup === "admin"
                ? "text-violet-400 border-b-2 border-violet-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {sidebarOpen ? "运维管理" : <BarChart3 className="h-4 w-4 mx-auto" />}
          </button>
        </div>

        <ScrollArea className="flex-1">
          <nav className="p-2 space-y-1">
            {(activeGroup === "pos" ? posItems : adminItems).map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        <div className="p-3 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-cyan-600 flex items-center justify-center text-xs font-bold">
              管
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">管理员</p>
                <p className="text-[10px] text-slate-500 truncate">admin</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-10 bg-slate-900/80 backdrop-blur border-b border-slate-800 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{isPosRoute ? "前台收银" : "运维管理"}</span>
            <span>/</span>
            <span className="text-slate-200">{navItems.find((i) => pathname === i.href || pathname.startsWith(i.href + "/"))?.label || "首页"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400">
              <Bot className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  )
}
