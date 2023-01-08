import { NavLink } from 'react-router-dom'
import logoUrl from '../assets/logo/logo.jpeg'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <div className="header-logo">
          <img src={logoUrl} alt="logo" />
        </div>
        <NavLink to="/">בית</NavLink>
      </nav>
    </header>
  )
}
