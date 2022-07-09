import {getPhotos} from './data.js';

const pictures = document.querySelector('.pictures'); // куда копировать
const fragment = document.createDocumentFragment();
const template = document.querySelector('#picture')
  .content
  .querySelector('.picture'); // что копировать

getPhotos().forEach(({url, likes, comments}) => {
  const photoElement = template.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(photoElement);
});

pictures.appendChild(fragment);
