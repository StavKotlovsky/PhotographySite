import { Photo, photoService } from '../services/photo-service'

import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList.jsx'
import { useFetchEffect } from '../hooks/useFetchEffect'

import { Loader } from '../cmps/Loader'
import Questions from '../cmps/Questions'

export const PregnancyPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('pregnancy')
    setPhotos(photos)
  }
  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos.length) return <Loader />
  return (
    <section className="page-container">
      <h4 className="title-list">צילומי הריון - פרי הבטן</h4>
      <p>
        יצירת הזיכרון הראשון עם הגוזל שלך ויצירת הזיכרון האחרון עם הבטן לפני
        הכניסה לחדר הלידה, זהו זיכרון קסום ומלא עוצמה של אהבה והרמוניה משפחתית
        המרגשת כל פעם מחדש
      </p>
      <PhotoList photos={photos} />
      <Questions
        answer="מומלץ לאחר שבוע 28 כשהבטן יוצאת ועוד לשבוע  34 "
        question="אז מתי בעצם הבטן מוכנה לצילומים?"
      />
      <Questions
        answer="את הכי יפה שנוח לך! מן הרצוי להצטלם עם בגדים המבליטים את הבטן כמו שמלה המבליטה את הבטן , חולצה ומכנסי הריון נוחים ומחמיאים  אך החשוב ביותר שיהיה לך נעים ונוח לנוע\ לשבת ,בקיצור להצטלם כשנוח לך"
        question="באיזה לבוש מגיעים לצילומים?"
      />
      <Questions answer="u" question="?" />
      <Questions answer="u" question="?" />
      <Questions answer="u" question="?" />
    </section>
  )
}
