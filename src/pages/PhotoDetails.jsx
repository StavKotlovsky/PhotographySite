import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cloudinaryService } from '../services/cloudinary.service'

export const PhotoDetails = () => {
  const [photo, setPhoto] = useState()
  const params = useParams()
  // const navigate = useNavigate()
  useEffect(() => {
    loadPhotos()
  }, [params.id])

  async function loadPhotos() {
    const photoId = params.id
    const photo = await cloudinaryService.getPhotosByTag(photoId)
    console.log(photo)
    setPhoto(photo)
  }
  if (!photo) return <div>Loading...</div>
  return (
    <div className="photo-details">
      <h1>hiii</h1>
    </div>
  )
}
