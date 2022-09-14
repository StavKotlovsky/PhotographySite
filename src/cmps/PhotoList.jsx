import { PhotoPreview } from './PhotoPreview'

export function PhotoList({ images }) {
  return (
    <section className="photo-list">
      <ul>
        <li className="clean-list photo-card">
          {images.map((img) => (
            <PhotoPreview key={img.id} img={img} />
          ))}
        </li>
      </ul>
    </section>
  )
}
