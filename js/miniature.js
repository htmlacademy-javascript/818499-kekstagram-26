import './util.js';
import './data.js';
import {getPhotos} from './data.js';
import {getRandomInt} from './util.js';

const pictures = document.querySelector('.pictures'); // куда копировать
const fragment = document.createDocumentFragment();
const template = document.querySelector('#picture')
  .content
  .querySelector('.picture'); // что копировать

getPhotos().forEach(({url, likes}) => {
  const photoElement = template.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = getRandomInt(15, 200);
  fragment.appendChild(photoElement);
});

pictures.appendChild(fragment);

// const test = console.log(getRandom(5));
// export {test};
