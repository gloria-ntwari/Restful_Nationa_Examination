import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BadgeCheck,
  DollarSign,
  FileText,
  Mail,
  MapPin,
  Minus,
  Phone,
  Receipt,
  User,
} from 'lucide-react'
import StatCard from '../components/ui/StatCard'
import { getClientById } from '../data/mockClients'

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3 py-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
      <div>
        <p className="text-xs font-medium text-text-muted">{label}</p>
        <p className="text-sm font-medium text-text-primary">{value}</p>
      </div>
    </div>
  )
}

export default function ClientDetailPage() {
  const { id } = useParams()
  const client = getClientById(id)
  const [activeTab, setActiveTab] = useState('invoices')

  if (!client) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-text-secondary">Client not found.</p>
        <Link
          to="/clients"
          className="mt-4 inline-flex text-sm font-medium text-accent-teal hover:underline"
        >
          Back to clients
        </Link>
      </div>
    )
  }

  const tabs = [
    { id: 'invoices', label: 'Invoices', count: client.invoices.length },
    { id: 'expenses', label: 'Expenses', count: client.expenseList.length },
  ]

  return (
    <div className="space-y-6">
      <div>
        <Link
          to="/clients"
          className="mb-2 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h2 className="text-2xl font-bold text-text-primary">{client.name}</h2>
        <p className="text-sm text-text-secondary">Client since {client.clientSince}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Revenue"
          value={client.revenue.toLocaleString()}
          subtext="RWF · paid invoices"
          icon={DollarSign}
          iconClassName="bg-green-50 text-brand"
        />
        <StatCard
          label="Expenses"
          value={client.expenses.toLocaleString()}
          subtext={`RWF · ${client.expenseRecords} records`}
          icon={Receipt}
          iconClassName="bg-red-50 text-red-500"
        />
        <StatCard
          label="Net Profit"
          value={client.netProfit.toLocaleString()}
          subtext="RWF · revenue - expenses"
          icon={Minus}
          iconClassName="bg-green-50 text-brand"
          valueClassName="text-brand"
          cardClassName="bg-green-50/40"
        />
        <StatCard
          label="Payment Rate"
          value={`${client.paymentRate}%`}
          subtext={`${client.paidInvoices} of ${client.totalInvoices} paid`}
          icon={BadgeCheck}
          iconClassName="bg-blue-50 text-blue-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-text-muted uppercase">
            Contact Information
          </h3>
          <div className="divide-y divide-border">
            <ContactRow icon={User} label="Contact Person" value={client.contactPerson} />
            <ContactRow icon={Mail} label="Email" value={client.email} />
            <ContactRow icon={Phone} label="Phone" value={client.phone} />
            <ContactRow icon={MapPin} label="Address" value={client.address} />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab.label} {tab.count}
              </button>
            ))}
          </div>
          <div className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center">
            {activeTab === 'invoices' && client.invoices.length === 0 && (
              <>
                <FileText className="mb-3 h-10 w-10 text-text-muted" />
                <p className="text-sm text-text-secondary">No invoices for this client.</p>
              </>
            )}
            {activeTab === 'expenses' && client.expenseList.length === 0 && (
              <>
                <Receipt className="mb-3 h-10 w-10 text-text-muted" />
                <p className="text-sm text-text-secondary">No expenses for this client.</p>
              </>
            )}
            {activeTab === 'invoices' &&
              client.invoices.map((inv) => (
                <p key={inv.id} className="text-sm text-text-primary">
                  {inv.title}
                </p>
              ))}
            {activeTab === 'expenses' &&
              client.expenseList.map((exp) => (
                <p key={exp.id} className="text-sm text-text-primary">
                  {exp.title}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 text-xs font-semibold tracking-wide text-text-muted uppercase">
          Quick Stats
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-text-muted">Total Invoices</p>
            <p className="text-lg font-semibold text-text-primary">{client.totalInvoices}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Paid Invoices</p>
            <p className="text-lg font-semibold text-text-primary">{client.paidInvoices}</p>
          </div>
          <div>
            <p className="text-xs text-text-muted">Expense Records</p>
            <p className="text-lg font-semibold text-text-primary">{client.expenseRecords}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
