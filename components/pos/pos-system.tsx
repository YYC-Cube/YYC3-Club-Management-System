"use client"
export default function POSSystem({ roomId, onClose }: { roomId?: string; onClose?: () => void }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">POS 收银系统</h2>
      <p className="text-muted-foreground">房间: {roomId || "未选择"}</p>
      {onClose && <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded" onClick={onClose}>返回</button>}
    </div>
  )
}
