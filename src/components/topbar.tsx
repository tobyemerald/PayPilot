function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <header className="sticky top-0 flex items-start justify-between gap-4 border-b border-slate-200 bg-white px-6 py-5">
        <div className="flex items-start gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-lg font-semibold text-slate-700 lg:hidden"
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Overview</h2>
            <p className="mt-1 text-sm text-slate-500">Monitor payments, balances, customers, and integrations.</p>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <input
            placeholder="Search payments, customers..."
            className="w-72 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none placeholder:text-slate-400"
          />
          <button className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
            Create
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">
            Alerts
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            PP
          </div>
        </div>
      </header>

      <div className="space-y-3 border-b border-slate-200 bg-white px-6 py-4 md:hidden">
        <input
          placeholder="Search payments, customers..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none placeholder:text-slate-400"
        />
        <div className="flex gap-3">
          <button className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">Create</button>
          <button className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700">Alerts</button>
        </div>
      </div>
    </>
  )
}


export default Topbar