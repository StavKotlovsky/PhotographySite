import { cloudinaryService } from '../services/cloudinary.service.js'
import { useEffect } from 'react'

import { useState } from 'react'
import { PhotoList } from '../cmps/PhotoList.jsx'

export const PregnancyPage = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    const photos = await cloudinaryService.getPhotosByTag('pregnancy')
    setPhotos(photos)
  }
  if (!photos) return <div>loading...</div>
  return (
    <section>
      <h4 className="title-list">צילומי הריון</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
