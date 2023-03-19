import img101 from '../assets/img/101.jpg'
import img102 from '../assets/img/102.jpg'
import img103 from '../assets/img/103.jpg'
import img104 from '../assets/img/104.jpg'

import ImageGallery from 'react-image-gallery'
import { NavLink } from 'react-router-dom'
import { photoService } from '../services/photo-service'
import { About } from '../cmps/About'
import { SocialMedia } from '../cmps/SocialMedia'
export const HomePage = () => {
  return (
    <section className="home-page flex page-container">
      <span className="flower"></span>
      <div className="home-page-content">
        <ImageGallery
          items={photoService.carouselPhotos}
          autoPlay
          slideInterval={3200}
        />

        <div className="grid-home-page">
          <NavLink to="/family">
            <img className="navlink-img" src={img102} alt="family" />
            <span>משפחה</span>
          </NavLink>

          <NavLink to="/business">
            <img className="navlink-img" src={img103} alt="business" />
            <span>עסקים ותדמית</span>
          </NavLink>

          <NavLink to="/pregnency">
            <img className="navlink-img" src={img101} alt="pregnency" />
            <span>הריון</span>
          </NavLink>
          <NavLink to="/events">
            <img className="navlink-img" src={img104} alt="events" />
            <span>אירועים וחתונות</span>
          </NavLink>
        </div>
        <SocialMedia />
        <About />
      </div>
    </section>
  )
}
