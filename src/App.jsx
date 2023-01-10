import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { FamilyPage } from './pages/FamilyPage'
import { PregnancyPage } from './pages/PregnancyPage'
import { BusinessPage } from './pages/BusinessPage'
import { PhotoDetails } from './pages/PhotoDetails'

import './assets/scss/main.scss'

function App() {
  return (
    <Router>
      <section className="main-app container">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:popo/:id" element={<PhotoDetails />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/pregnency" element={<PregnancyPage />} />
          <Route path="/business" element={<BusinessPage />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
