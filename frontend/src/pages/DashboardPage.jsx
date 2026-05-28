import { Link } from 'react-router-dom'
import { DollarSign, FileText, TrendingUp, Users } from 'lucide-react'
import StatCard from '../components/ui/StatCard'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-text-primary">Dashboard</h2>
        <p className="text-sm text-text-secondary">Overview of your financial activity</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value="1,250,000"
          subtext="RWF · this month"
          icon={DollarSign}
          iconClassName="bg-green-50 text-brand"
        />
        <StatCard
          label="Active Clients"
          value="2"
          subtext="registered clients"
          icon={Users}
          iconClassName="bg-blue-50 text-blue-500"
        />
        <StatCard
          label="Invoices"
          value="4"
          subtext="total issued"
          icon={FileText}
          iconClassName="bg-amber-50 text-amber-600"
        />
        <StatCard
          label="Growth"
          value="+12%"
          subtext="vs last month"
          icon={TrendingUp}
          iconClassName="bg-green-50 text-brand"
          valueClassName="text-brand"
        />
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-2 font-semibold text-text-primary">Quick links</h3>
        <p className="mb-4 text-sm text-text-secondary">
          Jump to common areas of the app.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/clients"
            className="rounded-lg border border-border bg-page-bg px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent-teal/40"
          >
            View Clients
          </Link>
          <Link
            to="/clients/1"
            className="rounded-lg border border-border bg-page-bg px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent-teal/40"
          >
            Sample Client Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
