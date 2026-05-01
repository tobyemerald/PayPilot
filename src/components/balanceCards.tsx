const balances = [
  { label: 'Available Balance', value: '$24,580.50', note: 'Ready for payout' },
  { label: 'Pending Balance', value: '$4,230.00', note: 'Settles in 2 days' },
  { label: 'Total Volume', value: '$128,450.90', note: '+14.8% this month' },
]


function BalanceCards() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {balances.map((item, index) => (
        <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{item.value}</p>
            </div>
            <div className={`h-11 w-11 rounded-2xl ${index === 0 ? 'bg-indigo-100' : index === 1 ? 'bg-amber-100' : 'bg-emerald-100'}`} />
          </div>
          <p className="mt-4 text-sm text-slate-500">{item.note}</p>
        </div>
      ))}
    </section>
  )
}

export default BalanceCards