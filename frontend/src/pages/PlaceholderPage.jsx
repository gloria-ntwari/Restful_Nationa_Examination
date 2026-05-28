export default function PlaceholderPage({ title }) {
  return (
    <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm">
      <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      <p className="mt-2 text-sm text-text-secondary">This section is coming soon.</p>
    </div>
  )
}
