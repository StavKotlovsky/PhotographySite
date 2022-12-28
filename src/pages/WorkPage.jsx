import { useEffect, useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { cloudinaryService } from '../services/cloudinary.service'

export const WorkPage = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    const photos = await cloudinaryService.getPhotosByTag('work')
    console.log(photos)
    setPhotos(photos)
  }

  return (
    <section>
      <PhotoList photos={photos} />
    </section>
  )
}
