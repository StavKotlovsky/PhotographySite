import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoUrl from '../assets/logo/logo.png'
import { HeaderMenu } from './HeaderMenu'

export function AppHeader() {
  const [showFlower, setShowFlower] = useState(false)

  useEffect(() => {
    const onScroll = (ev: Event) => {
      if (window.scrollY >= 100) {
        setShowFlower(true)
      } else {
        setShowFlower(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="app-header">
      <nav>
        <div className="header-logo">
          <NavLink to="/">
            <img src={logoUrl} alt="logo" />
          </NavLink>
        </div>
        <span className={`flower ${showFlower ? 'show' : ''}`}></span>
        <section className="header-nav-link">
          <NavLink to="/">בית</NavLink>
          <NavLink to="/family">משפחה</NavLink>
          <NavLink to="/pregnency">הריון</NavLink>
          <NavLink to="/business">עסקים</NavLink>
          <NavLink to="/events">אירועים</NavLink>
        </section>
        <HeaderMenu />
      </nav>
    </header>
  )
}
