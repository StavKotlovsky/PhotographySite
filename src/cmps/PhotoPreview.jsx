import { AdvancedImage } from '@cloudinary/react'

export function PhotoPreview({ imgUrl }) {
  return (
    <section className="photo-preview">
      <img src={imgUrl} alt="" />
    </section>
  )
}
