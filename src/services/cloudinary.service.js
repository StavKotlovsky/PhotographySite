import { Cloudinary } from '@cloudinary/url-gen'
import { storageService } from './storageService.js'
import axios from 'axios'

const cloudName = 'stavk22'
const cld = new Cloudinary({
  cloud: {
    cloudName,
  },
})

const PHOTO_KEY = 'photoDB'
const photoCache = storageService.load(PHOTO_KEY) || {}

const getPhotoById = async (id) => {
  console.log('id', id)
}

const getPhotosByTag = async (tagName) => {
  if (photoCache[tagName]) {
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
      name: tagName,
    }))
    storageService.save(PHOTO_KEY, photoCache)
    return res.data.resources.map((r) => ({
      id: r.public_id.replaceAll('/', '_'),
      path: r.public_id,
      description: r.context?.custom.alt,
      price: r.context?.custom.caption,
      name: tagName,
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

// import { Cloudinary } from '@cloudinary/url-gen';
// import { storageService } from './storage-service';
// import axios from 'axios';

// const cloudName = 'stavk22';
// const cld = new Cloudinary({
//   cloud: {
//     cloudName,
//   },
// });

// const PHOTO_KEY = 'photoDB';
// const photoCache = storageService.load<Photo[]>(PHOTO_KEY) || [];

// const getPhotoById = async (id: string) => {
//   console.log('id', id);
// };

// const getPhotosByTag = async (tagName: string) => {
//   if (photoCache.length) {
//     const photos = photoCache.filter((p) => p.name === tagName);
//     if (photos.length) {
//       return photos;
//     }
//   }
//   try {
//     const res = await axios.get<CloudinaryResponse>(
//       `https://res.cloudinary.com/${cloudName}/image/list/${tagName}.json`,
//     );

//     const photos = res.data.resources.map<Photo>((r) => ({
//       id: r.public_id.replaceAll('/', '_'),
//       path: r.public_id,
//       description: r.context?.custom.alt,
//       price: r.context?.custom.caption,
//       name: tagName,
//     }));

//     photoCache.push(...photos);

//     storageService.save(PHOTO_KEY, photoCache);

//     return photos;
//   } catch (e) {
//     console.error('cant get photos from cache', e);
//   }
// };

// export const cloudinaryService = {
//   getPhotosByTag,
//   getPhotoById,
//   cld,
// };

// export interface Photo {
//   id: string;
//   path: string;
//   description: string | undefined;
//   price: string | undefined;
//   name: string;
// }

// interface CloudinaryPhoto {
//   public_id: string;
//   context?: {
//     custom: {
//       alt: string;
//       caption: string;
//     };
//   };
// }

// interface CloudinaryResponse {
//   resources: CloudinaryPhoto[];
// }
