import { useState } from 'react'
import logoUrl from '../assets/logo/logo.jpeg'
import demoUrl from '../assets/img/roni-image.jpeg'
import ImageGallery from 'react-image-gallery'

export const HomePage = () => {
  const images = [
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1667497443/family/IMG_9874_d6ujjf.jpg',
      // thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1666784084/Pregnancy/IMG_1324_dj7r6c.jpg',
      // thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1667497380/family/IMG_0313_dk1pxy.jpg',
      // thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]

  return (
    <section className="home-page flex">
      <div className="home-img">
        <img src={logoUrl} alt="logo" />
      </div>
      <div className="home-page-content">
        <ImageGallery items={images} />
        <h1 className="about-title">קצת עליי</h1>
        <div className="about">
          <span className="about-image"></span>
          <span className="cotent">
            <h1>
              לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו
              ננבי, צמוקו בלוקריה שיצמה ברורק. קוואזי במר מודוף. אודיפו בלאסטיק
              מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח
              לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה
              ומרגשח. עמחליף ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף בגורמי
              מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
            </h1>
          </span>
        </div>
      </div>
    </section>
  )
}
