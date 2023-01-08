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
    console.log('id from details', photoId)
    const photo = cloudinaryService.getPhotoById(photoId)
    setPhoto(photo)
  }
  if (!photo) return <div>Loading...</div>
  console.log('photo details', photo)
  return (
    <div className="photo-details">
      <h1>photo details</h1>
      <img className="details-img" src={params.id} alt="photoId" />
    </div>
  )
}
