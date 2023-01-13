import { photoService } from '../services/photo-service'

export function PhotoPreview({ path }) {
  const myImage = photoService.cld.image(path)
  return <img className="photo-preview" src={myImage.toURL()} alt="" />
}
