import React from 'react'
import { PhotoPreview } from './PhotoPreview'
import { cloudinaryService } from '../services/cloudinary.service'

export function PhotoList({ photos }) {
  return (
    <React.Fragment>
      <div className="photo-list-title"></div>
      <ul className="photo-list">
        <li className="clean-list">
          {photos.map((photo) => {
            const myImage = cloudinaryService.cld.image(photo.path)
            return (
              <PhotoPreview
                key={photo.id}
                imgUrl={myImage.toURL()}
                photoId={photo.id}
              />
            )
          })}
        </li>
      </ul>
    </React.Fragment>
  )
}
