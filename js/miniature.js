import './util.js';
import './data.js';
import {photos} from './data.js';

const pictures = document.querySelector('.pictures'); // куда копировать
const templateFragment = document.querySelector('#picture')
  .content
  .querySelector('.picture'); // что копировать

const createElement = photos();
createElement.forEach(({url, likes, comments}) => {
  const photoElement = templateFragment.cloneNode(true);
  photoElement.document.querySelector('.picture__img').src = url;
  photoElement.document.querySelector('.picture__likes').textContent = likes;
  photoElement.document.querySelector('.picture__comments').textContent = comments;
  templateFragment.appendChild(photoElement);
});

pictures.appendChild(templateFragment);

// const test = console.log(getRandom(5));
// export {test};
