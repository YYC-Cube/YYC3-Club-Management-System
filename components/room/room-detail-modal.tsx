"use client"
export default function RoomDetailModal({ room, isOpen, onClose }: { room: any; isOpen: boolean; onClose: () => void; onStart?: (id: string) => void; onCheckout?: (id: string) => void }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-background p-6 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">{room?.name || "房间详情"}</h2>
        <p className="text-muted-foreground">状态: {room?.status}</p>
        <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded" onClick={onClose}>关闭</button>
      </div>
    </div>
  )
}
