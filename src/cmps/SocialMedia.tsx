import instagram from '../assets/icon/instagram.png'
import facebook from '../assets/icon/facebook.png'
import whatsapp from '../assets/icon/whatsapp.png'

export function SocialMedia() {
  return (
    <section className="social-media">
      <span className="whatsapp">
        <a
          href="https://wa.me/9720506522060?text="
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </span>
      <a
        href="https://www.instagram.com/roni_shay_photographer"
        target="_blank"
        rel="noreferrer"
      >
        <img className="instagram" src={instagram} alt="instagram" />
      </a>
      <a
        href="https://m.facebook.com/roni.shay"
        target="_blank"
        rel="noreferrer"
      >
        <img className="facebook" src={facebook} alt="" />
      </a>
    </section>
  )
}
