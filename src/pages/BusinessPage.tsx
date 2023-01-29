import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

import loading from '../assets/icon/loading.gif'
import { Loader } from '../cmps/Loader'

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
      <h4 className="title-list">צילומי עסקים</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
