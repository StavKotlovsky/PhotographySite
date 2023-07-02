import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PhotoPreview } from '../cmps/PhotoPreview'
import { useFetchEffect } from '../hooks/useFetchEffect'
import { Photo, photoService } from '../services/photo-service'
import { Loader } from '../cmps/Loader'

import next from '../assets/icon/next.png'
import back from '../assets/icon/back.png'
import close from '../assets/icon/close.png'

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
  const onBack = () => {
    navigate(`/${photo?.tagName}`)
  }

  async function onNextClick(diff: number) {
    const nextPhotoId = await photoService.getNextPhotoId(
      params.id as string,
      photo?.tagName || '',
      diff
    )
    if (nextPhotoId) {
      navigate(`/${photo?.tagName}/${nextPhotoId}`)
      loadPhotos()
    }
  }

  if (!photo) return <Loader />
  return (
    <section onClick={onBack} className="photo-details-container">
      <button className="back-button" onClick={onBack}>
        <img src={close} alt="" />
      </button>
      <PhotoPreview path={photo.path} />
      <button className="left" onClick={() => onNextClick(-1)}>
        <img src={back} alt="" />
      </button>
      <button className="right" onClick={() => onNextClick(1)}>
        <img src={next} alt="" />
      </button>
    </section>
  )
}
