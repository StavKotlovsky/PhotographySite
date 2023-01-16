import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

import loading from '../assets/icon/loading.gif'

export const FamilyPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('family')
    console.log('photos', photos)
    setPhotos(photos)
  }

  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos)
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    )
  return (
    <section className="page-container">
      <h4 className="title-list">צילומי משפחה</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
