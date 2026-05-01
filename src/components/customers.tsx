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


export default CustomerPanel;