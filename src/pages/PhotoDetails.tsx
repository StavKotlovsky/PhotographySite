import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PhotoPreview } from '../cmps/PhotoPreview'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'
import { Loader } from '../cmps/Loader'
// import NextButton from '../cmps/NextButton'

export const PhotoDetails = () => {
  const [photo, setPhoto] = useState<Photo>()
  const params = useParams()
  const navigate = useNavigate()

  useFetchEffect(() => {
    loadPhotos()
  }, [params.id])

  async function loadPhotos() {
    const photoId = params.id as string
    const photo = await photoService.getPhotoById(photoId)
    setPhoto(photo)
  }

  async function onNextClick() {}

  if (!photo) return <Loader />
  return (
    <section className="photo-details-container">
      <button onClick={() => window.history.back()}>חזור</button>
      <div className="photo-details">
        <PhotoPreview path={photo.path} />
        <button></button>
        {/* <NextButton photo={photo} /> */}
      </div>
    </section>
  )
}
