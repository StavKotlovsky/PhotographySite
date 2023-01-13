import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PhotoPreview } from '../cmps/PhotoPreview'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'

export const PhotoDetails = () => {
  const [photo, setPhoto] = useState<Photo>()
  const params = useParams()

  useFetchEffect(() => {
    loadPhotos()
  }, [params.id])

  async function loadPhotos() {
    const photoId = params.id as string
    const photo = await photoService.getPhotoById(photoId)
    console.log('photo details', photo)
    setPhoto(photo)
  }
  if (!photo) return <div>Loading...</div>
  return (
    <div className="photo-details">
      <h1>photo details</h1>
      <PhotoPreview path={photo.path} />
    </div>
  )
}
