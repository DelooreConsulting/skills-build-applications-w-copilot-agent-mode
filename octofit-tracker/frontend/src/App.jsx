import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function App() {
  return <div className="app-shell">
    <header className="app-header"><div><p className="eyebrow">OCTOFIT TRACKER</p><h1>Train with purpose.</h1></div><span className="status-dot">API connected</span></header>
    <nav className="app-nav" aria-label="Primary navigation"><NavLink to="/" end>Overview</NavLink><NavLink to="/activities">Activities</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink><NavLink to="/teams">Teams</NavLink><NavLink to="/users">Users</NavLink><NavLink to="/workouts">Workouts</NavLink></nav>
    <main className="app-content"><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
  </div>
}

function Overview() {
  return <section className="overview"><p className="eyebrow">YOUR TRAINING HQ</p><h2>Build momentum, one session at a time.</h2><p className="lead">Explore the latest activity, team energy, and workout ideas from your OctoFit community.</p><div className="overview-links"><NavLink className="btn btn-dark" to="/activities">View activity</NavLink><NavLink className="btn btn-outline-dark" to="/workouts">Find a workout</NavLink></div></section>
}

export default App
