import instagram from '../assets/icon/instagram.png'
import facebook from '../assets/icon/facebook.png'
import whatsapp from '../assets/icon/whatsapp.png'
import gmail from '../assets/icon/gmail.png'

export function SocialMedia() {
  return (
    <section className="social-media">
      <a
        href="https://wa.me/9720506522060?text="
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="whatsapp" />
      </a>
      <a
        href="https://www.instagram.com/roni_shay_photographer"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        href="https://m.facebook.com/roni.shay"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="" />
      </a>
      <a
        href="mailto:ronkish41@gmail.com?subject=נושא&body=תוכן ההודעה"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gmail} alt="" />
      </a>
    </section>
  )
}
