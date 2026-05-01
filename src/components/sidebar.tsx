const navItems = [
  'Home',
  'Payments',
  'Balances',
  'Customers',
  'Products',
  'Reports',
  'Developers',
  'Settings',
]


function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const content = (
    <>
      <div>
        <div className="flex items-start justify-between border-b border-indigo-950/70 px-6 py-6">
          <div>
            <h1 className="text-2xl font-bold text-white">PayPilot</h1>
            <p className="mt-1 text-sm text-indigo-200/70">Fintech dashboard</p>
          </div>
          {/*<button
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-xl text-indigo-200 hover:bg-indigo-950 lg:hidden"
            aria-label="Close sidebar"
          >
            ×
          </button>*/}
        </div>

        <nav className="space-y-1 px-4 py-6">
          {navItems.map((item, index) => (
            <button
              key={item}
              className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                index === 0
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'text-indigo-100/80 hover:bg-indigo-950/70 hover:text-white'
              }`}
            >
              <span className={`mr-3 h-2 w-2 rounded-full ${index === 0 ? 'bg-indigo-600' : 'bg-indigo-300/50'}`} />
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="border-t border-indigo-950/70 p-4">
        <div className="rounded-2xl bg-indigo-950/70 p-4">
          <p className="text-sm font-semibold text-white">Test mode</p>
          <p className="mt-1 text-sm leading-6 text-indigo-100/70">
            Use this dashboard to track demo payments and integration health.
          </p>
          <button className="mt-4 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-indigo-950">
            View docs
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <aside className="hidden h-screen w-64 shrink-0 flex-col justify-between bg-indigo-950 text-indigo-100 lg:flex">
        {content}
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <button className="absolute inset-0 bg-slate-950/60" onClick={onClose} aria-label="Close overlay" />
          <aside className="relative z-30 flex h-full w-72 max-w-[85%] flex-col justify-between bg-indigo-950 text-indigo-100 shadow-2xl">
            {content}
          </aside>
        </div>
      )}
    </>
  )
}


export default Sidebar