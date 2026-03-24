export function formatValue(value: number, currency: string): string {
  if (value >= 1_000_000) return `${currency} ${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${currency} ${(value / 1_000).toFixed(0)}K`
  return `${currency} ${value}`
}
