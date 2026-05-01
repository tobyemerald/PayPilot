import { useState } from 'react'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'
import BalanceCards from './components/balanceCards'
import RevenueChart from './components/revenueChart'
import QuickActions from './components/quickActions'
import PaymentsTable from './components/paymentTables'

const customers = [
  { name: 'Maya Stone', email: 'maya@example.com', value: '$4,820' },
  { name: 'Aisha Bello', email: 'aisha@example.com', value: '$3,240' },
  { name: 'Elena Ross', email: 'elena@example.com', value: '$2,910' },
]


function CustomerPanel() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <h3 className="text-lg font-semibold text-slate-950">Top customers</h3>
      <p className="mt-1 text-sm text-slate-500">Customers by lifetime value</p>
      <div className="mt-6 space-y-4">
        {customers.map((customer) => (
          <div key={customer.email} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                {customer.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{customer.name}</p>
                <p className="text-xs text-slate-500">{customer.email}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-slate-900">{customer.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function IntegrationStatus() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <h3 className="text-lg font-semibold text-slate-950">Integration health</h3>
      <p className="mt-1 text-sm text-slate-500">API and webhook status</p>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl bg-emerald-50 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-emerald-900">API status</p>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Live</span>
          </div>
          <p className="mt-2 text-sm text-emerald-800/80">All payment endpoints are responding normally.</p>
        </div>

        <div className="rounded-2xl bg-indigo-50 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-indigo-950">Webhook health</p>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">99.9%</span>
          </div>
          <p className="mt-2 text-sm text-indigo-900/70">Recent events delivered successfully.</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <div className="sticky top-0 h-screen z-10">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

          <main className="flex-1 space-y-6 p-6 lg:p-8">
            <BalanceCards />

            <section className="grid gap-6 xl:grid-cols-3">
              <RevenueChart />
              <QuickActions />
            </section>

            <PaymentsTable />

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
