import { AdvancedImage } from '@cloudinary/react'
import { Link } from 'react-router-dom'

export function PhotoPreview({ imgUrl }) {
  return (
    <Link to={`/photo/${imgUrl.id}`} className="photo-preview">
      <img className="photo-preview" src={imgUrl} alt="" />
    </Link>
  )
}
