import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

import { Loader } from '../cmps/Loader'

export const WeddingsPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('weddings')
    setPhotos(photos)
  }

  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos.length) return <Loader />
  return (
    <section className="weddings-page">
      <h4 className="title-list"> חתונות</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
