import { useEffect, useState } from 'react'
import { fetchCollection } from './api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams').then(setTeams).catch((loadError) => setError(loadError.message)) }, [])
  return <section className="data-section"><div className="section-heading"><div><p className="eyebrow">COMMUNITY</p><h2>Teams</h2><p>Find your people and keep each other moving.</p></div><span className="record-count">{teams.length} teams</span></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="tile-grid">{teams.map((team) => <article className="data-tile" key={team._id}><h3>{team.name}</h3><p>{team.members?.length || 0} members</p><div className="member-list">{team.members?.slice(0, 3).map((member) => <span key={member._id}>{member.name}</span>)}</div></article>)}</div>}</section>
}

export default Teams