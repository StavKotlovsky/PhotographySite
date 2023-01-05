import { Cloudinary } from '@cloudinary/url-gen'
import { storageService } from './storageService.js'
import axios from 'axios'

const cloudName = 'stavk22'
const cld = new Cloudinary({
  cloud: {
    cloudName,
  },
})

let photosDb = []

const PHOTO_KEY = 'photoDB'
const photoCache = storageService.load(PHOTO_KEY) || {}

const getPhotos = async () => {
  if (photosDb) return photosDb

  const res = await axios('cloudinary')
  console.log('res.data', res.data)
  photosDb = res.data.resources.map((photo) => ({
    id: photo.id,
    path: photo.path,
    name: photo.name,
  }))
  return photosDb
}

const getPhotoById = async (id) => {
  console.log('id service', id)
  const photos = await getPhotos()
  return photos.find((photo) => photo.id === id)
}

const getPhotosByTag = async (tagName) => {
  if (photoCache[tagName]) {
    console.log('getting from cache')
    return photoCache[tagName]
  }
  try {
    const res = await axios.get(
      `https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`
    )
    photoCache[tagName] = res.data.resources.map((r) => ({
      id: r.public_id.replaceAll('/', '_'),
      path: r.public_id,
      description: r.context?.custom.alt,
      price: r.context?.custom.caption,
    }))
    storageService.save(PHOTO_KEY, photoCache)
    return res.data.resources.map((r) => ({
      id: r.public_id.replaceAll('/', '_'),
      path: r.public_id,
      description: r.context?.custom.alt,
      price: r.context?.custom.caption,
    }))
  } catch (e) {
    console.error('cant get photos from cache', e)
  }
}

export const cloudinaryService = {
  getPhotosByTag,
  getPhotoById,
  cld,
}
