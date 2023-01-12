import { NavLink } from 'react-router-dom'
import logoUrl from '../assets/logo/logo.jpeg'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <div className="header-logo">
          <NavLink to="/">
            <img src={logoUrl} alt="logo" />
          </NavLink>
        </div>
        {/* <NavLink to="/">צור קשר</NavLink> */}
        <NavLink to="/">בית</NavLink>
      </nav>
    </header>
  )
}
