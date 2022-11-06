import { Link } from 'react-router-dom'

export function PhotoPreview({ imgUrl, photoId }) {
  console.log(photoId)
  return (
    <Link to={`/photo/${photoId}`} className="photo-preview">
      <img className="photo-preview" src={imgUrl} alt="" />
    </Link>
  )
}
