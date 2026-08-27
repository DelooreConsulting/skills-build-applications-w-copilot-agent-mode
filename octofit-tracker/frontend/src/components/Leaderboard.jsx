import { useEffect, useState } from 'react'
import { displayName, fetchCollection } from './api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('leaderboard').then(setEntries).catch((loadError) => setError(loadError.message)) }, [])
  return <section className="data-section"><div className="section-heading"><div><p className="eyebrow">COMPETE</p><h2>Leaderboard</h2><p>Consistency turns into points.</p></div><span className="record-count">{entries.length} athletes</span></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="leaderboard-list">{entries.map((entry, index) => <div className="leaderboard-row" key={entry._id}><strong>#{entry.rank || index + 1}</strong><span>{displayName(entry.user)}<small>{displayName(entry.team)}</small></span><b>{entry.points} pts</b></div>)}</div>}</section>
}

export default Leaderboard