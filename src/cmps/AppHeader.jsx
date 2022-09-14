import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <NavLink to="/family">צילומי משפחה</NavLink>
        <NavLink to="/pregnency">צילומי הריון</NavLink>
        <NavLink to="/portrait">צילומי תדמית</NavLink>
        <NavLink to="/">בית</NavLink>
      </nav>
    </header>
  )
}
