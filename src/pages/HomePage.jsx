import img101 from '../assets/img/101.jpg'
import img102 from '../assets/img/102.jpg'
import img103 from '../assets/img/103.jpg'

import ImageGallery from 'react-image-gallery'
import { NavLink } from 'react-router-dom'
import { photoService } from '../services/photo-service'
import { About } from '../cmps/About'
import { SocialMedia } from '../cmps/SocialMedia'
import ContactModal from '../cmps/ContactModal'

export const HomePage = () => {
  return (
    <section className="home-page flex">
      <span className="flower"></span>
      <SocialMedia />
      <div className="home-page-content">
        <ImageGallery
          items={photoService.carouselPhotos}
          autoPlay
          slideInterval={3200}
        />

        <div className="grid-home-page">
          <NavLink to="/family">
            <img className="navlink-img" src={img102} alt="family" />
            <span className="icon">משפחה</span>
          </NavLink>

          <NavLink to="/business">
            <img className="navlink-img" src={img103} alt="business" />
            <span className="icon">עסקים</span>
          </NavLink>

          <NavLink className="pregnency-navlink" to="/pregnency">
            <img className="navlink-img" src={img101} alt="pregnency" />
            <span className="icon">הריון</span>
          </NavLink>
        </div>
        <About />
      </div>
    </section>
  )
}
