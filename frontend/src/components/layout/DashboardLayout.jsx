import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function DashboardLayout() {
  return (
    <div className="min-h-svh bg-page-bg">
      <Sidebar />
      <div className="ml-64 flex min-h-svh flex-col">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
