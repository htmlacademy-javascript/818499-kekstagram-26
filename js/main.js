const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Число не должно быть меньше нуля');
  }
  if (min > max) {
    return Math.floor(Math.random() * (max - min - 1) + 1 + min);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(getRandomInt(5, 0));

const getLenght = (string, lengthNumber = 140) => string.length <= lengthNumber;
