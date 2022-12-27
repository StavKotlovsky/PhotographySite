import { Link } from 'react-router-dom'

export function PhotoPreview({ imgUrl, photoId }) {
  return (
    <Link to={`${photoId}`} className="photo-preview">
      <img className="photo-preview" src={imgUrl} alt="" />
    </Link>
  )
}
