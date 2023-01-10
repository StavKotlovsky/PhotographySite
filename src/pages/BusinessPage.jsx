import { useEffect, useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { cloudinaryService } from '../services/cloudinary.service'

export const BusinessPage = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    const photos = await cloudinaryService.getPhotosByTag('business')
    setPhotos(photos)
  }
  if (!photos) return <div>loading...</div>
  return (
    <section>
      <h4 className="title-list">צילומי עסקים</h4>
      <PhotoList photos={photos} />
    </section>
  )
}
