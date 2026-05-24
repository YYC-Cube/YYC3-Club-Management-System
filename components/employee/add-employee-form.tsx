"use client"
export function AddEmployeeForm({ onClose }: { onClose?: () => void }) {
  return <div className="p-6"><h2 className="text-xl font-bold mb-4">添加员工</h2><p className="text-muted-foreground">员工表单开发中...</p>{onClose && <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded" onClick={onClose}>关闭</button>}</div>
}
