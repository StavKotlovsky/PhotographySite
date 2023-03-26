import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../assets/icon/menu.png'
import ClickOutside from './ClickOutside'

export function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="header-menu">
      <button className="header-menu-button" onClick={toggleMenu}>
        <img src={menu} alt="" />
      </button>
      {isMenuOpen && (
        <ClickOutside onOutsideClick={() => console.log('lalaaaa')}>
          <nav className="header-nav-menu">
            <ul className="clean-list">
              <li>
                <NavLink onClick={toggleMenu} to="/">
                  בית
                </NavLink>
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/family">
                  משפחה
                </NavLink>
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/pregnency">
                  הריון
                </NavLink>
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/business">
                  עסקים
                </NavLink>
              </li>
              <li>
                <NavLink onClick={toggleMenu} to="/events">
                  אירועים
                </NavLink>
              </li>
            </ul>
          </nav>
        </ClickOutside>
      )}
    </div>
  )
}
