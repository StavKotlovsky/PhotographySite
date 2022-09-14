export function PhotoPreview({ img }) {
  return (
    <section className="photo-preview flex">
      <img src={img.imgUrl} alt="" />
      <h1>{img.title}</h1>
    </section>
  )
}
