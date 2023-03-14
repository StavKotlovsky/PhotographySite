import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

import { Loader } from '../cmps/Loader'
import ScrollBottom from '../cmps/ScrollBottum'
import Questions from '../cmps/Questions'

export const BusinessPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('business')
    setPhotos(photos)
  }

  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos.length) return <Loader />
  return (
    <section className="page-container">
      <h4 className="title-list"> צילומי עסקים ותדמית</h4>
      <p>
        כיום בעזרת המדיה אנחנו חושפים את עצמנו לעולם בשלל דרכים אז למה שלא
        תשקיעו בעצמכם קצת יותר בתמונת תדמית או תמונות לעסק
        <ScrollBottom />
      </p>
      <PhotoList photos={photos} />
      <h4 className="title-list">שאלות ותשובות</h4>
      <Questions
        answer='בעלי עסקים קטנים, בעלי חברות, עורכי דין,  מנכ"לים ,נושאי משרה בכירים וכל סוגי העסקים.
לא רק לבעלי עסקים מומלץ צילומי תדמית אלא לכולם, כן אני מדברת על תמונת הפרופיל בפייסבוק או באינסטרם .
כיום בעזרת המדיה אנחנו חושפים את עצמנו לעולם בשלל דרכים אז למה שלא תשקיעו בעצמכם קצת יותר בתמונת תדמית לפרופיל שלכם תשמש אתכם בווצאפ וברחבי המדיה ותשקף את מי שאתם ברמה מקצועית ואיכותית.
'
        question="?למי נועדו צילומי תדמית"
      />
    </section>
  )
}
