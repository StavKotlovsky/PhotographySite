import { Cloudinary } from '@cloudinary/url-gen'
import axios from 'axios'

const cloudName = 'stavk22'
const cld = new Cloudinary({
  cloud: {
    cloudName,
  },
})

const tagNames = ['family', 'pregnancy', 'business', 'events', 'weddings']

const photoDb: Photo[] = []

const getPhotoById = async (id: string) => {
  if (!photoDb.length) {
    await initPhotoDb()
  }
  return photoDb.find((photo) => photo.id === id)
}

const initPhotoDb = async () => {
  for (let i = 0; i < tagNames.length; i++) {
    const tagName = tagNames[i]
    const res = await axios.get<CloudinaryResponse>(
      `https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`
    )

    const photos = res.data.resources.map<Photo>((r) => ({
      id: r.public_id.replaceAll('/', '_'),
      path: r.public_id,
      tagName,
    }))

    photoDb.push(...photos)
  }
}

const getNextPhotoId = async (
  currPhotoId: string,
  currTagName: string,
  diff: number
) => {
  const photos = await getPhotosByTag(currTagName)
  const currIdx = photos.findIndex((photo) => photo.id === currPhotoId)
  const nextIdx = (currIdx + diff + photos.length) % photos.length
  return photos[nextIdx].id
}

const getPhotosByTag = async (tagName: string) => {
  if (!photoDb.length) {
    await initPhotoDb()
  }
  const photos = photoDb.filter((p) => p.tagName === tagName)
  return photos
}

export const photoService = {
  getPhotosByTag,
  getPhotoById,
  getNextPhotoId,
  cld,
  carouselPhotos: [
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1672230433/Pregnancy/IMG_2318_truo84.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1676202541/work/IMG_6135_ypndcs.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1672231595/work/IMG_8791_bcuif9.jpg',
    },
    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1676202410/family/IMG_4703_fsmkxb.jpg',
    },

    {
      original:
        'https://res.cloudinary.com/stavk22/image/upload/v1673264458/nature/IMG_7303_rtclwy.jpg',
    },
  ],
}

export interface Photo {
  id: string
  path: string
  tagName: string
}

interface CloudinaryPhoto {
  public_id: string
  context?: {
    custom?: {
      alt: string
      caption: string
    }
  }
}

interface CloudinaryResponse {
  resources: CloudinaryPhoto[]
}
