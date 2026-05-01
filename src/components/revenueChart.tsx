import { 
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'


const revenueData = [
  { day: 'Mon', payments: 8200 },
  { day: 'Tue', payments: 12400 },
  { day: 'Wed', payments: 9800 },
  { day: 'Thu', payments: 16800 },
  { day: 'Fri', payments: 21400 },
  { day: 'Sat', payments: 18500 },
  { day: 'Sun', payments: 24600 },
]

function RevenueChart() {
  const formatCurrency = (value: number) => `$${value.toLocaleString()}`

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 xl:col-span-2">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">Payment volume</h3>
          <p className="text-sm text-slate-500">Daily payment performance for the last 7 days</p>
        </div>
        <div className="flex rounded-xl w-max bg-slate-100 p-1 text-sm font-medium text-slate-600">
          <button className="rounded-lg bg-white px-3 py-1.5 shadow-sm">7D</button>
          <button className="px-3 py-1.5">30D</button>
          <button className="px-3 py-1.5">12M</button>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="paymentsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.28} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={formatCurrency} />
            <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Payments']} />
            <Area type="monotone" dataKey="payments" stroke="#4f46e5" strokeWidth={3} fill="url(#paymentsGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart;
