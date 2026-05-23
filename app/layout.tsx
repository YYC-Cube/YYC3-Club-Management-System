import type { Metadata } from "next"
import "../styles/globals.css"
import AppLayout from "@/components/layout/app-layout"

export const metadata: Metadata = {
  title: "F-KTV POS 系统",
  description: "KTV 前台收银与运维管理系统",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
