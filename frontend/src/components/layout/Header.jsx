import { Bell, ChevronDown, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center gap-4 border-b border-border bg-card px-6 py-4">
      <div className="min-w-0 flex-1">
        <h1 className="text-lg font-bold text-text-primary">Welcome back, Admin!</h1>
        <p className="text-sm text-text-secondary">Managing Your Destination.</p>
      </div>

      <div className="relative w-full max-w-md flex-1 sm:mx-4 sm:w-auto">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
        <input
          type="search"
          placeholder="Search invoices, clients, expenses..."
          className="w-full rounded-full border border-border bg-page-bg py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-teal/20"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-full p-2 text-text-secondary transition-colors hover:bg-page-bg"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full transition-colors hover:bg-page-bg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sidebar text-sm font-semibold text-white">
            A
          </span>
          <ChevronDown className="h-4 w-4 text-text-muted" />
        </button>
      </div>
    </header>
  )
}
