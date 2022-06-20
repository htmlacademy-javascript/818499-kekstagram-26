const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Число не должно быть меньше нуля');
  }
  if (min > max) {
    return Math.floor(Math.random() * (max - min - 1) + 1 + min);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getLenght = (string, lengthNumber = 140) => string.length <= lengthNumber;

getRandomInt (1, 5);
getLenght('test');


const ID = [];
const URL = [];
const DESCRIPTION = ['Вид на пляж', 'Указатель', 'Машина в городе', 'Краб', 'Пальмы вечером'];
const LIKES = [];
const COMMENTS = [
  idCommtent = [],
  AVATAR = [],
  MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'],
  NAME = ['Иван', 'Петр', 'Алексанр', 'Елена', 'Мария', 'Олег']
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const createObject = () => ({
    id: getRandomInt(1, 25),
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInt(15, 200),
    comments: {
      id: (Math.floor(Math.random() * 100) + 1),
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAME),
    }
  });


console.log(createObject());
createObject();
