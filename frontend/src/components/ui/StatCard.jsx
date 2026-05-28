export default function StatCard({
  label,
  value,
  subtext,
  icon: Icon,
  iconClassName = 'text-brand bg-green-50',
  valueClassName = 'text-text-primary',
  cardClassName = '',
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-5 shadow-sm ${cardClassName}`}
    >
      <div className="mb-3 flex items-start justify-between">
        <p className="text-xs font-semibold tracking-wide text-text-muted uppercase">
          {label}
        </p>
        {Icon && (
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClassName}`}
          >
            <Icon className="h-4 w-4" strokeWidth={2} />
          </span>
        )}
      </div>
      <p className={`text-2xl font-bold ${valueClassName}`}>{value}</p>
      <p className="mt-1 text-xs text-text-secondary">{subtext}</p>
    </div>
  )
}
