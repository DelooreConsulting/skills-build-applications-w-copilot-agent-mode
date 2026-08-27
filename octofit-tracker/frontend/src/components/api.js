const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api` : '/api'

export async function fetchCollection(component) {
  const response = await fetch(`${apiBaseUrl}/${component}/`)
  if (!response.ok) throw new Error(`Unable to load ${component} (${response.status})`)
  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.data)) return payload.data
  return []
}

export function displayName(value) {
  if (!value) return 'Unknown'
  if (typeof value === 'string') return value
  return value.name || value.email || 'Unknown'
}

export function formatDate(value) {
  if (!value) return '-'
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(value))
}