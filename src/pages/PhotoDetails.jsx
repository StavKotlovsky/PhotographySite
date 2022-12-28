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
    const photo = cloudinaryService.cld.image(params.id)
    console.log(photo)
    setPhoto(photo)
  }
  if (!photo) return <div>Loading...</div>
  console.log(photo)
  return (
    <div className="photo-details">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
        alias quam reiciendis et vero atque ipsa laudantium. Ipsam ad totam
        earum. Voluptates neque atque, tempore aliquam nesciunt inventore
        placeat.
      </h1>
    </div>
  )
}
