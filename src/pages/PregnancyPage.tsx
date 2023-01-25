import { Photo, photoService } from '../services/photo-service'

import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList.jsx'
import { useFetchEffect } from '../hooks/useFetchEffect'

import loading from '../assets/icon/loading.gif'

export const PregnancyPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('pregnancy')
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
      <h4 className="title-list">צילומי הריון</h4>
      <PhotoList photos={photos} />
    </section>
  )
}