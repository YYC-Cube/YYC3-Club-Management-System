"use client"
export default function RoomStatusDashboard({ rooms, onRoomClick }: { rooms: any[]; onRoomClick?: (room: any) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {rooms.map((r: any) => (
        <div key={r.id} onClick={() => onRoomClick?.(r)} className="p-4 border rounded cursor-pointer hover:bg-accent">
          <div className="font-medium">{r.name}</div>
          <div className="text-sm text-muted-foreground">{r.status}</div>
        </div>
      ))}
    </div>
  )
}
