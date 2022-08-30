import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'

import './assets/scss/main.scss'

function App() {
  return (
    <Router>
      <section className="main-app container">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
