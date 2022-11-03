import { NavLink } from 'react-router-dom'
import imgUrl from '../assets/logo/logo.jpeg'

export function AppHeader() {
  return (
    <header className="app-header">
      <nav>
        <div className="header-logo">{/* <img src={imgUrl} alt="" /> */}</div>
        <NavLink to="/family">צילומי משפחה</NavLink>
        <NavLink to="/pregnency">צילומי הריון</NavLink>
        <NavLink to="/portrait">צילומי תדמית</NavLink>
        <NavLink to="/">בית</NavLink>
      </nav>
    </header>
  )
}
