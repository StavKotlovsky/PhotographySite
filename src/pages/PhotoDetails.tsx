import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PhotoPreview } from '../cmps/PhotoPreview'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'
import loading from '../assets/icon/loading.gif'

export const PhotoDetails = () => {
  const [photo, setPhoto] = useState<Photo>()
  const params = useParams()

  useFetchEffect(() => {
    loadPhotos()
  }, [params.id])

  async function loadPhotos() {
    const photoId = params.id as string
    const photo = await photoService.getPhotoById(photoId)
    setPhoto(photo)
  }

  // const onBack = () => {
  //   navigate()
  // }

  if (!photo)
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    )
  return (
    <section className="photo-details-container">
      {/* <button onClick={() => onBack()}>back</button> */}
      <div className="photo-details">
        <PhotoPreview path={photo.path} />
      </div>
    </section>
  )
}
