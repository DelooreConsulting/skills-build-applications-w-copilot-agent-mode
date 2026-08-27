import { useEffect, useState } from 'react'
import { fetchCollection } from './api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('workouts').then(setWorkouts).catch((loadError) => setError(loadError.message)) }, [])
  return <section className="data-section"><div className="section-heading"><div><p className="eyebrow">TRAINING LIBRARY</p><h2>Workouts</h2><p>Choose a challenge that fits today.</p></div><span className="record-count">{workouts.length} plans</span></div>{error ? <p className="alert alert-warning">{error}</p> : <div className="tile-grid">{workouts.map((workout) => <article className="data-tile" key={workout._id}><span className="eyebrow">{workout.type}</span><h3>{workout.name}</h3><p>{workout.duration} min - {workout.difficulty}</p><ul>{workout.exercises?.slice(0, 3).map((exercise) => <li key={exercise}>{exercise}</li>)}</ul></article>)}</div>}</section>
}

export default Workouts