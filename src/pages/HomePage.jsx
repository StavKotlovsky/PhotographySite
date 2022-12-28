import logoUrl from '../assets/logo/logo.jpeg'
import img100 from '../assets/img/100.jpg'
import img101 from '../assets/img/101.jpg'
import img102 from '../assets/img/102.jpg'
import img103 from '../assets/img/103.jpg'
import ImageGallery from 'react-image-gallery'

export const HomePage = () => {
  const images = [
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1666784089/Pregnancy/IMG_2735_pcfnqj.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1666784084/Pregnancy/IMG_1324_dj7r6c.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1667497380/family/IMG_0313_dk1pxy.jpg',
    },
  ]

  return (
    <section className="home-page flex">
      <div className="home-img">
        <img src={logoUrl} alt="logo" />
      </div>

      <div className="home-page-content">
        <ImageGallery items={images} />
        <div className="grid-home-page">
          <img src={img100} alt="" />
          <img src={img101} alt="" />
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
