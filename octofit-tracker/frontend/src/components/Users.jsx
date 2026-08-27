import { useEffect, useState } from 'react'
import { fetchCollection } from './api.js'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('users', usersEndpoint).then(setUsers).catch((loadError) => setError(loadError.message)) }, [])
  return <section className="data-section"><div className="section-heading"><div><p className="eyebrow">ATHLETES</p><h2>Users</h2><p>The people behind the progress.</p></div><span className="record-count">{users.length} athletes</span></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="tile-grid">{users.map((user) => <article className="data-tile" key={user._id}><h3>{user.name}</h3><p>{user.email}</p><span className="badge text-bg-light">{user.profile?.fitnessLevel || 'Fitness level unset'}</span></article>)}</div>}</section>
}

export default Users