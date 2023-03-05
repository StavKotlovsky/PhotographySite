import { useState } from 'react'
import { Loader } from '../cmps/Loader'
import { PhotoList } from '../cmps/PhotoList'
import Questions from '../cmps/Questions'
import ScrollBottom from '../cmps/ScrollBottum'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

export const FamilyPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('family')
    setPhotos(photos)
  }

  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos.length) return <Loader />
  return (
    <section className="page-container">
      <h4 className="title-list">צילומי משפחה - חוויה ואיחוד משפחתי</h4>
      <p>
        צילומי משפחה זה לא רק מזכרת אותנטית מקצועית ואיכותית של היקרים לנו מכל
        זו גם חוויה נפלאה ומאחדת לכל המשפחה
        <ScrollBottom />
      </p>
      <PhotoList photos={photos} />
      <Questions
        answer="איפה שרק תרצו! אפשר בבית , אפשר גם בטבע ותמיד אפשר גם לגוון ולשנות מיקום,
העיקר שתרגישו נוחות ואיתה מגיעה הקלילות וכמובן שגם אני שם איתכם לעזור לכם להשתחרר
"
        question="?אז איפה מתנהלים הצילומים"
      />
      <Questions
        answer="נהנים  מכל רגע! אנחנו נמנע מאפשרות הבימוי וכדי שהתמונות יצאו מלאות רגש כמו במציאות זה הזמן לעשות שטויות עם  הילדים שלכם שבדרך כלל אתם עייפים או עסוקים ופשוט  להנות מגיבוש משפחתי שעל הדרך גם מתועד ברמה מקצועית ואיכותית ויהיה מזכרת לכל החיים."
        question="?איך מתנהל יום צילומים"
      />
      <Questions
        answer="יוצרים איתי קשר שבוע לפני או יותר ובשיחה טלפונית קובעים את מיקום הצילומים ,את יום הצילומים ,שעת הצילומים וכמובן גם עלויות."
        question="?יאלה! מתי מצטלמים"
      />
    </section>
  )
}
