import { useState } from 'react'

const payments = [
  { id: 'pay_10231', customer: 'Maya Stone', amount: '$840.00', status: 'Succeeded', method: 'Card', date: 'Apr 24' },
  { id: 'pay_10232', customer: 'Daniel Lee', amount: '$120.50', status: 'Pending', method: 'Bank', date: 'Apr 24' },
  { id: 'pay_10233', customer: 'Aisha Bello', amount: '$2,450.00', status: 'Succeeded', method: 'Card', date: 'Apr 23' },
  { id: 'pay_10234', customer: 'Noah Grant', amount: '$75.99', status: 'Failed', method: 'Card', date: 'Apr 23' },
  { id: 'pay_10235', customer: 'Elena Ross', amount: '$590.00', status: 'Succeeded', method: 'Wallet', date: 'Apr 22' },
]

type Payment = {
  id: string;
  customer: string;
  amount: string;
  status: string;
  method: string;
  date: string;
};

const filterOptions = ['All', 'Succeeded', 'Pending', 'Failed']


function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Succeeded: 'bg-emerald-50 text-emerald-700',
    Pending: 'bg-amber-50 text-amber-700',
    Failed: 'bg-rose-50 text-rose-700',
  }

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}>{status}</span>
}

function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <div className='flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3'>
            <span className='text-sm text-slate-500'>{label}</span>
            <span className='text-sm font-semibold text-slate-900'>{value}</span>
        </div>
    )
}

type PaymentsTableProps = {
  search: string
  statusFilter: string
  setStatusFilter: (status: string) => void
}

function PaymentsTable( { search, statusFilter, setStatusFilter }: PaymentsTableProps) {
  const filteredPayments = payments.filter(p => {
    const matchesSearch = 
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())

    const matchesStatus = statusFilter === 'All' || p.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">Recent payments</h3>
          <p className="text-sm text-slate-500">Latest customer payments and status updates</p>
        </div>
        <div className="mb-5 flex flex-wrap gap-2">
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setStatusFilter(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                statusFilter === option
                    ? 'bg-indigo-600 text-white'
                    : 'border border=slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              {option}
            </button>
          ))}
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">View all</button>
        </div>
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
            {filteredPayments.map((payment) => (
              <tr key={payment.id} 
                onClick={() => setSelectedPayment(payment)}
                className="cursor-pointer bg-slate-50 text-sm text-slate-700 transition hover:bg-indigo-50"
            >
                <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-950">{payment.id}</td>
                <td className="px-4 py-4">{payment.customer}</td>
                <td className="px-4 py-4 font-semibold">{payment.amount}</td>
                <td className="px-4 py-4"><StatusBadge status={payment.status} /></td>
                <td className="px-4 py-4">{payment.method}</td>
                <td className="rounded-r-2xl px-4 py-4">{payment.date}</td>
              </tr>
            ))}
          </tbody>
          
          {filteredPayments.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-10 text-center text-sm text-slate-500">
                No payments found.
              </td>
          </tr>
          )}

        </table>

        {selectedPayment && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4">
              <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                        Payment Details
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Full information for {selectedPayment.id}
                    </p>
                  </div>

                    <button
                        onClick={() => setSelectedPayment(null)}
                        className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    >
                        Close
                    </button>
                </div>

                <div className="mt-6 space-y-4">
                    <DetailRow label="Payment ID" value={selectedPayment.id} />
                    <DetailRow label="Customer" value={selectedPayment.customer} />
                    <DetailRow label="Amount" value={selectedPayment.amount} />
                    <DetailRow label="Status" value={selectedPayment.status} />
                    <DetailRow label="Method" value={selectedPayment.method} />
                    <DetailRow label="Date" value={selectedPayment.date} />
                </div>
              </div>
            </div>
            )}
      </div>
    </section>
  )
}

export default PaymentsTable;