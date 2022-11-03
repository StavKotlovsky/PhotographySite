import { PhotoPreview } from './PhotoPreview'
import { cloudinaryService } from '../services/cloudinary.service'

export function PhotoList({ photos }) {
  return (
    <ul className="photo-list">
      <li className="clean-list">
        {photos.map((photo) => {
          const myImage = cloudinaryService.cld.image(photo.id)
          return <PhotoPreview key={photo.id} imgUrl={myImage.toURL()} />
        })}
      </li>
    </ul>
  )
}
