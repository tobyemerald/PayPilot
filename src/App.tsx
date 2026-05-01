import { useState } from 'react'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'
import BalanceCards from './components/balanceCards'
import RevenueChart from './components/revenueChart'
import QuickActions from './components/quickActions'
import PaymentsTable from './components/paymentTables'
import CustomerPanel from './components/customers'
import IntegrationStatus from './components/developer'


export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <div className="sticky top-0 h-screen z-10">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} search={search} setSearch={setSearch} />

          <main className="flex-1 space-y-6 p-6 lg:p-8">
            <BalanceCards />

            <section className="grid gap-6 xl:grid-cols-3">
              <RevenueChart />
              <QuickActions />
            </section>

            <PaymentsTable 
              search={search}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
               />

            <section className="grid gap-6 xl:grid-cols-2">
              <CustomerPanel />
              <IntegrationStatus />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
