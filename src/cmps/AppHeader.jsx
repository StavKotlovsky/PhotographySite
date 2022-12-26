import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <div className="header-logo">
          <span className="flower"></span>
        </div>
        <NavLink to="/family">משפחה</NavLink>
        <NavLink to="/pregnency">עסקים</NavLink>
        <NavLink to="/">בית</NavLink>
      </nav>
    </header>
  )
}
