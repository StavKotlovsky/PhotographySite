import { Cloudinary } from '@cloudinary/url-gen'
import axios from 'axios'

const cloudName = 'stavk22'
const cld = new Cloudinary({
  cloud: {
    cloudName,
  },
})

const getPhotosByTag = async (tagName) => {
  const res = await axios.get(
    `https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`
  )
  return res.data.resources.map((r) => ({
    id: r.public_id.replaceAll('/', '_'),
    path: r.public_id,
    description: r.context?.custom.alt,
    price: r.context?.custom.caption,
  }))
}

async function getPhotoById(id) {}

export const cloudinaryService = {
  getPhotosByTag,
  getPhotoById,
  cld,
}
