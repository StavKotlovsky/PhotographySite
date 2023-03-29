import { Photo, photoService } from '../services/photo-service'

import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList.jsx'
import { useFetchEffect } from '../hooks/useFetchEffect'

import { Loader } from '../cmps/Loader'
import Questions from '../cmps/Questions'
import ScrollBottom from '../cmps/ScrollBottum'
import { Outlet } from 'react-router-dom'

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
      <Outlet />
      <h4 className="title-list">צילומי הריון - פרי הבטן</h4>
      <p>
        יצירת הזיכרון הראשון עם הגוזל שלך ויצירת הזיכרון האחרון עם הבטן לפני
        הכניסה לחדר הלידה, זהו זיכרון קסום ומלא עוצמה של אהבה והרמוניה משפחתית
        המרגשת כל פעם מחדש
        <ScrollBottom />
      </p>
      <PhotoList photos={photos} />
      <h4 className="title-list">שאלות ותשובות</h4>
      <Questions
        answer="מומלץ לאחר שבוע 28 כשהבטן יוצאת ועוד לשבוע  34 "
        question="?אז מתי בעצם הבטן מוכנה לצילומים"
      />
      <Questions
        answer="את הכי יפה שנוח לך! מן הרצוי להצטלם עם בגדים המבליטים את הבטן כמו שמלה המבליטה את הבטן , חולצה ומכנסי הריון נוחים ומחמיאים  אך החשוב ביותר שיהיה לך נעים ונוח לנוע\ לשבת ,בקיצור להצטלם כשנוח לך"
        question="?באיזה לבוש מגיעים לצילומים"
      />
      <Questions
        answer="במקום להתלבט מול הארון את לגמרי יכולה להרשות לעצמך להתפרע ולהביא איתך את מגוון הבגדים שאת אוהבת ולהשוויץ בהם אל מול המצלמה"
        question="?להצטלם עם שמלה או חולצה ומכנס"
      />
      <Questions
        answer="במקום שעושה לנו את ההרגשה הכי טובה והכי נינוחה אם זה בבית ,בטבע ואפשר גם וגם"
        question="?איפה בדרך כלל מצטלמים"
      />
      <Questions
        answer="את יכולה להביא איתך לצילומים את מי שאת רוצה! בן זוג הילדים ואפילו הכלב, חברה טובה גם אם היא לא בהריון אפילו כמה חברות ,העיקר שתרגישי בנוח"
        question="?המשפחה יכולה להצטרף"
      />
    </section>
  )
}
