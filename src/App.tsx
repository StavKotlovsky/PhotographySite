import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { BusinessPage } from './pages/BusinessPage'
import { FamilyPage } from './pages/FamilyPage'
import { HomePage } from './pages/HomePage'
import { PhotoDetails } from './pages/PhotoDetails'
import { PregnancyPage } from './pages/PregnancyPage'
import './assets/scss/main.scss'
import { Footer } from './cmps/Footer'

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
        <Footer />
      </section>
    </Router>
  )
}

export default App
