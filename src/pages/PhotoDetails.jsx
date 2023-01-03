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
    console.log(params.id)
    // const photo = cloudinaryService.getPhotoById(photo.publicID)
    // setPhoto(photo)
  }
  if (!photo) return <div>Loading...</div>
  console.log(photo)
  return (
    <div className="photo-details">
      <h1>pore aliquam nesciunt inventore placeat.</h1>
    </div>
  )
}
