import React from 'react'
import { PhotoPreview } from './PhotoPreview'
import { Link } from 'react-router-dom'

export function PhotoList({ photos }) {
  return (
    <React.Fragment>
      <div className="photo-list-title"></div>
      <ul className="photo-list">
        <li className="clean-list">
          {photos.map((photo) => (
            <Link to={photo.id} key={photo.id} className="photo-preview">
              <PhotoPreview path={photo.path} />
            </Link>
          ))}
        </li>
      </ul>
    </React.Fragment>
  )
}
