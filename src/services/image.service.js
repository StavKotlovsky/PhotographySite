import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
import img7 from '../assets/img/7.jpg'
import img8 from '../assets/img/8.jpg'
import img9 from '../assets/img/9.jpg'
import img10 from '../assets/img/10.jpg'
import img11 from '../assets/img/11.jpg'
import img12 from '../assets/img/12.jpg'
import img13 from '../assets/img/13.jpg'
import img14 from '../assets/img/14.jpg'
import img15 from '../assets/img/15.jpg'
import img16 from '../assets/img/16.jpg'

export const imageService = {
  query,
}

var gNextId = 100

createImags()

function query() {
  return createImags()
}

function createImags() {
  const images = _createImag()
  return images
}

function getPregnancyPhotos() {}

function _createImag() {
  return [
    {
      id: gNextId++,
      title: '1',
      category: 'Family',
      imgUrl: img1,
    },
    {
      id: gNextId++,
      title: '2',
      category: 'Family',
      imgUrl: img2,
    },
    {
      id: gNextId++,
      title: '3',
      category: 'Family',
      imgUrl: img3,
    },
    {
      id: gNextId++,
      title: '4',
      category: 'Family',
      imgUrl: img4,
    },
    {
      id: gNextId++,
      title: '5',
      category: 'Family',
      imgUrl: img5,
    },
    {
      id: gNextId++,
      title: '6',
      category: 'Family',
      imgUrl: img6,
    },
    {
      id: gNextId++,
      title: '7',
      category: 'Family',
      imgUrl: img7,
    },
    {
      id: gNextId++,
      title: '8',
      category: 'Family',
      imgUrl: img8,
    },
    {
      id: gNextId++,
      title: '9',
      category: 'Family',
      imgUrl: img9,
    },
    {
      id: gNextId++,
      title: '10',
      category: 'Family',
      imgUrl: img10,
    },
    {
      id: gNextId++,
      title: '11',
      category: 'Family',
      imgUrl: img11,
    },
    {
      id: gNextId++,
      title: '12',
      category: 'Family',
      imgUrl: img12,
    },
    {
      id: gNextId++,
      title: '13',
      category: 'Family',
      imgUrl: img13,
    },
    {
      id: gNextId++,
      title: '14',
      category: 'Family',
      imgUrl: img14,
    },
    {
      id: gNextId++,
      title: '15',
      category: 'Family',
      imgUrl: img15,
    },
    {
      id: gNextId++,
      title: '16',
      category: 'Family',
      imgUrl: img16,
    },
  ]
}
