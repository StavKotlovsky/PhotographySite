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
    id: r.public_id,
    description: r.context?.custom.alt,
    price: r.context?.custom.caption,
  }))
}

// const getPublicIdsByTag = async (tagName) => {
//   const res = await axios.get(
//     `https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`
//   )
//   console.log(' res.data.resources', res.data.resources)
//   return res.data.resources.map((r) => r.public_id)
// }

export const cloudinaryService = {
  getPhotosByTag,
  cld,
}
