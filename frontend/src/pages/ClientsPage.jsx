import { Link } from 'react-router-dom'
import { ChevronRight, Plus } from 'lucide-react'
import { mockClients } from '../data/mockClients'

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Clients</h2>
          <p className="text-sm text-text-secondary">Manage your client relationships</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-teal-dark"
        >
          <Plus className="h-4 w-4" />
          Add Client
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-page-bg">
            <tr>
              <th className="px-6 py-3 font-semibold text-text-muted">Name</th>
              <th className="px-6 py-3 font-semibold text-text-muted">Email</th>
              <th className="px-6 py-3 font-semibold text-text-muted">Phone</th>
              <th className="px-6 py-3 font-semibold text-text-muted">Since</th>
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {mockClients.map((client) => (
              <tr key={client.id} className="border-b border-border last:border-0">
                <td className="px-6 py-4 font-medium text-text-primary">{client.name}</td>
                <td className="px-6 py-4 text-text-secondary">{client.email}</td>
                <td className="px-6 py-4 text-text-secondary">{client.phone}</td>
                <td className="px-6 py-4 text-text-secondary">{client.clientSince}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/clients/${client.id}`}
                    className="inline-flex items-center gap-1 text-accent-teal hover:underline"
                  >
                    View
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
