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
import { WeddingsPage } from './pages/WeddingsPage'
import { CouplesPage } from './pages/CouplesPage'

function App() {
  const routeId = <Route path=":id" element={<PhotoDetails />} />
  return (
    <Router>
      <section className="main-app container">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/family" element={<FamilyPage />}>
            {routeId}
          </Route>
          <Route path="/pregnency" element={<PregnancyPage />}>
            {routeId}
          </Route>
          <Route path="/business" element={<BusinessPage />}>
            {routeId}
          </Route>
          <Route path="/events" element={<EventsPage />}>
            {routeId}
          </Route>
          <Route path="/Weddings" element={<WeddingsPage />}>
            {routeId}
          </Route>
          <Route path="/couples" element={<CouplesPage />}>
            {routeId}
          </Route>
        </Routes>
        <Footer />
      </section>
    </Router>
  )
}

export default App
