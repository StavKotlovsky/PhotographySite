import { photoService } from '../services/photo-service'
import loading from '../assets/icon/loading.gif'

export function PhotoPreview({ path }) {
  const myImage = photoService.cld.image(path)
  if (!path)
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    )
  return <img className="photo-preview" src={myImage.toURL()} alt="" />
}
