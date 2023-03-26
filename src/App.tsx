import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { BusinessPage } from './pages/BusinessPage'
import { FamilyPage } from './pages/FamilyPage'
import { HomePage } from './pages/HomePage'
import { PhotoDetails } from './pages/PhotoDetails'
import { PregnancyPage } from './pages/PregnancyPage'
import { EventsPage } from './pages/EventsPage'

import { Footer } from './cmps/Footer'

import './assets/scss/main.scss'

function App() {
  return (
    <Router>
      <section className="main-app container">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/family" element={<FamilyPage />}>
            <Route path=":id" element={<PhotoDetails />} />
          </Route>
          <Route path="/pregnency" element={<PregnancyPage />}>
            <Route path=":id" element={<PhotoDetails />} />
          </Route>
          <Route path="/business" element={<BusinessPage />}>
            <Route path=":id" element={<PhotoDetails />} />
          </Route>
          <Route path="/events" element={<EventsPage />}>
            <Route path=":id" element={<PhotoDetails />} />
          </Route>
        </Routes>
        <Footer />
      </section>
    </Router>
  )
}

export default App
