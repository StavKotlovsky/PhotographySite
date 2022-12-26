import { useEffect, useState } from 'react'
import { PhotoList } from '../cmps/PhotoList'
import { cloudinaryService } from '../services/cloudinary.service'
import { PregnancyPage } from './PregnancyPage'
// const TAG = 'family'

export const FamilyPage = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    const photos = await cloudinaryService.getPhotosByTag('family')
    setPhotos(photos)
  }
  // const loadPregnancyPhotos = async () => {
  //   const photos = await cloudinaryService.getPhotosByTag('pregnancy')
  //   setPhotos(photos)
  // }

  return (
    <section>
      {/* <button onClick={loadPregnancyPhotos}>הריון</button> */}
      <PhotoList photos={photos} />
    </section>
  )
}
