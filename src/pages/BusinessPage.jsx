import { useEffect, useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { photoService } from '../services/photo-service.ts'

export const BusinessPage = () => {
  const [photos, setPhotos] = useState([])

  const loadPhotos = async () => {
    const photos = await photoService.getPhotosByTag('business')
    setPhotos(photos)
  }

  useFetchEffect(() => {
    loadPhotos()
  }, [loadPhotos])

  if (!photos) return <div>loading...</div>
  return (
    <section className="page-container">
      <h4 className="title-list">צילומי עסקים</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
