import { photoService } from '../services/photo-service.ts'

import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList.jsx'
import { useFetchEffect } from '../hooks/useFetchEffect'

export const PregnancyPage = () => {
  const [photos, setPhotos] = useState([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('pregnancy')
    setPhotos(photos)
  }
  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos) return <div>loading...</div>
  return (
    <section className="page-container">
      <h4 className="title-list">צילומי הריון</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
