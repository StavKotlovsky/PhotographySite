import { AdvancedImage } from '@cloudinary/react'

export function PhotoPreview({ imgUrl }) {
  return (
    <section className="photo-preview">
      <img className="photo-preview" src={imgUrl} alt="" />
    </section>
  )
}
