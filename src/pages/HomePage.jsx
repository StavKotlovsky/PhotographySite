import img101 from '../assets/img/101.jpg'
import img102 from '../assets/img/102.jpg'
import img103 from '../assets/img/103.jpg'

import ImageGallery from 'react-image-gallery'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
  const images = [
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1672230433/Pregnancy/IMG_2318_truo84.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1672231595/work/IMG_8791_bcuif9.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1672231360/family/IMG_4606_hlk3cq.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1672747412/work/IMG_5184_spi3ea.jpg',
    },
  ]

  return (
    <section className="home-page flex">
      <span className="flower"></span>

      <div className="home-page-content">
        <ImageGallery items={images} />

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

        <div className="about">
          <span className="about-image"></span>
          <span className="cotent">
            <h2>
              ,ברוכים הבאים לעולם הצילום שלי
              <br />
              .קוראים לי רוני שי ואחת התרפיות שלי היא לתעד במצלמה שלי <br />
              תיעוד מבחנתי זו סוג של מילה נרדפת למזכרת , כשאני מתעדת אני רואה
              דרך המצלמה רגעים של אושר המתבטא במגוון דרכים הסיבה העיקרית שעוזרת
              לאושר להתבטא בתמונה היא הרגשת נינוחות ורוגע שהצד השני המצולם מרגיש
              וכך, ברגע שמעלים זיכרונות ומסתכלים על התמונה נרגיש בתוכנו את אותו
              הרגש וכך החיוך יעלה או הבכי, זו הסיבה שאני כל כך אוהבת לתעד ,להיות
              שם ולהנציח את הרגע גורם לי לסיפוק נפשי שזה מדהים! אז חברים יקרים
              אני כאן בשבילכם ואעזור לכם בדרך מקצועית לתעד את החוויות המשפחתיות
              שלכם כמו אירועים משפחתיים או עסקיים, צילומי הריון, צילומי תדמית
              לעסק וצילומי בת\בר מצווה
              <br />
              אני מבטיחה לכם שהצילומים איתי הכי קלילים וזורמים ואפילו חוויה לכל
              החיים
            </h2>
          </span>
        </div>
      </div>
    </section>
  )
}
