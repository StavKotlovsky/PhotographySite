import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

import { Loader } from '../cmps/Loader'
import { WeddingsPage } from './WeddingsPage'

export const EventsPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('events')
    setPhotos(photos)
  }

  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos.length) return <Loader />
  return (
    <section className="page-container">
      <h4 className="title-list">צילומי אירועים קטנים מסיבות וחתונות</h4>
      <p>
        בצילום אירועים ומסיבות עד 200 איש יש רגש ואותנטיות, הרגע הזה שאני מתעדת
        במצלמה את הטירוף ברחבה או את רגע שבירת הכוס אלה רגעים מלאי רגש ואותנטיות
        ובעזרת תיעוד התחושות האלו יוצאות התמונות הכי מרגשות, טובות ,מקצועיות
        ואיכותיות שתקבלו מהאירוע החשוב בחייכם או מהמסיבה המטורפת שחשובה שלכם
      </p>
      <PhotoList photos={photos} />
      <WeddingsPage />
    </section>
  )
}
