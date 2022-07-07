import './util.js';
import { getRandomInt } from './util.js';
import { getRandom } from './util.js';

const ID = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
const DESCRIPTION = ['Вид на пляж', 'Указатель', 'Машина в городе', 'Краб', 'Пальмы вечером'];
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];
const NAME = ['Иван', 'Петр', 'Алексанр', 'Елена', 'Мария', 'Олег'];
const URL = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const createObject = () => ({
  id: ID.pop(),
  url: `photos/${URL.pop()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInt(15, 200),
  comments:[
    {
      id: getRandom(1000),
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME),
      avatar: `img/avatar-${getRandom(3)}.svg`,
    }
  ]
});

const photos = () => Array.from({length: 25}, createObject);

export {photos};
export {createObject};
