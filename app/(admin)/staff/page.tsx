"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddEmployeeForm from "@/components/employee/add-employee-form"
import PermissionManagement from "@/components/employee/permission-management"
import GroupManagement from "@/components/employee/group-management"

export default function StaffPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">员工管理</h1>
      <Tabs defaultValue="employees" className="w-full">
        <TabsList>
          <TabsTrigger value="employees">员工列表</TabsTrigger>
          <TabsTrigger value="permissions">权限管理</TabsTrigger>
          <TabsTrigger value="groups">组织架构</TabsTrigger>
        </TabsList>
        <TabsContent value="employees"><AddEmployeeForm /></TabsContent>
        <TabsContent value="permissions"><PermissionManagement /></TabsContent>
        <TabsContent value="groups"><GroupManagement /></TabsContent>
      </Tabs>
    </div>
  )
}
