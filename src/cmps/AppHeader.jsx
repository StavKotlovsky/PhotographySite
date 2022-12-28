import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <div className="header-logo">
          <span className="flower"></span>
        </div>
        <NavLink to="/family">משפחה</NavLink>
        <NavLink to="/pregnency">הריון</NavLink>
        <NavLink to="/work">עסקים</NavLink>
        <NavLink to="/">בית</NavLink>
      </nav>
    </header>
  )
}
