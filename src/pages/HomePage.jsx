import { useState } from 'react'
import logoUrl from '../assets/logo/logo.jpeg'

export const HomePage = () => {
  return (
    <section className="home-page">
      <div className="home-img">
        <img src={logoUrl} alt="logo" />
      </div>
    </section>
  )
}
