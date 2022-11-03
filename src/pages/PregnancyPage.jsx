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

  return (
    <section>
      <PhotoList photos={photos} />
    </section>
  )
}
