import { useEffect, useState } from 'react'
import { displayName, fetchCollection, formatDate } from './api.js'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? (import.meta.env.DEV ? '/api/activities/' : `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`)
  : '/api/activities/'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('activities', activitiesEndpoint).then(setActivities).catch((loadError) => setError(loadError.message)) }, [])
  return <DataTable title="Activity log" subtitle="Every session adds up." error={error}><table className="table align-middle"><thead><tr><th>Athlete</th><th>Activity</th><th>Duration</th><th>Calories</th><th>Date</th></tr></thead><tbody>{activities.map((activity) => <tr key={activity._id}><td>{displayName(activity.user)}</td><td>{activity.type}</td><td>{activity.duration} min</td><td>{activity.calories}</td><td>{formatDate(activity.date)}</td></tr>)}</tbody></table></DataTable>
}

function DataTable({ title, subtitle, error, children }) {
  return <section className="data-section"><div className="section-heading"><div><p className="eyebrow">TRACKING</p><h2>{title}</h2><p>{subtitle}</p></div><span className="record-count">{error ? 'Offline' : 'Live data'}</span></div>{error ? <p className="alert alert-warning">{error}</p> : children}</section>
}

export default Activities