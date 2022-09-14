import { useState } from 'react'
import imgUrl from '../assets/logo/logo.jpeg'
import { imageService } from '../services/image.service.js'
// import { Carousel } from '../cmps/Carousel'

export const HomePage = () => {
  const [image, setImage] = useState(imageService.query())

  // const loadImage = () => {
  //   const images = imageService.query()
  //   setImage(images)
  // }

  return (
    <section className="home-page">
      <div className="home-img">
        <img src={imgUrl} alt="logo" />
      </div>
      {/* <Carousel image={image} /> */}
    </section>
  )
}
