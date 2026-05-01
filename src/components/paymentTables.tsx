const payments = [
  { id: 'pay_10231', customer: 'Maya Stone', amount: '$840.00', status: 'Succeeded', method: 'Card', date: 'Apr 24' },
  { id: 'pay_10232', customer: 'Daniel Lee', amount: '$120.50', status: 'Pending', method: 'Bank', date: 'Apr 24' },
  { id: 'pay_10233', customer: 'Aisha Bello', amount: '$2,450.00', status: 'Succeeded', method: 'Card', date: 'Apr 23' },
  { id: 'pay_10234', customer: 'Noah Grant', amount: '$75.99', status: 'Failed', method: 'Card', date: 'Apr 23' },
  { id: 'pay_10235', customer: 'Elena Ross', amount: '$590.00', status: 'Succeeded', method: 'Wallet', date: 'Apr 22' },
]

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Succeeded: 'bg-emerald-50 text-emerald-700',
    Pending: 'bg-amber-50 text-amber-700',
    Failed: 'bg-rose-50 text-rose-700',
  }

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}>{status}</span>
}

function PaymentsTable() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">Recent payments</h3>
          <p className="text-sm text-slate-500">Latest customer payments and status updates</p>
        </div>
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">View all</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="px-4 py-2 font-medium">Payment ID</th>
              <th className="px-4 py-2 font-medium">Customer</th>
              <th className="px-4 py-2 font-medium">Amount</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Method</th>
              <th className="px-4 py-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="bg-slate-50 text-sm text-slate-700">
                <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-950">{payment.id}</td>
                <td className="px-4 py-4">{payment.customer}</td>
                <td className="px-4 py-4 font-semibold">{payment.amount}</td>
                <td className="px-4 py-4"><StatusBadge status={payment.status} /></td>
                <td className="px-4 py-4">{payment.method}</td>
                <td className="rounded-r-2xl px-4 py-4">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PaymentsTable;