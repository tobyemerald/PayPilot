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

export default IntegrationStatus;