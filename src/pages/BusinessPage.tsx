import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

import { Loader } from '../cmps/Loader'
import ScrollBottom from '../cmps/ScrollBottum'

export const BusinessPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('business')
    setPhotos(photos)
    console.log(photos)
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
    </section>
  )
}
