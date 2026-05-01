function QuickActions() {
  const actions = ['Create invoice', 'Send payout', 'Add customer', 'View reports']

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70">
      <h3 className="text-lg font-semibold text-slate-950">Quick actions</h3>
      <p className="mt-1 text-sm text-slate-500">Common payment tasks</p>
      <div className="mt-6 grid gap-3">
        {actions.map((action) => (
          <button key={action} className="rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            {action}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions