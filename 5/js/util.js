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


function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export  {getRandomInt};
export {getLenght};
export {getRandom};
