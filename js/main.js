// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Число не должно быть меньше нуля');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(getRandomInt(0,15));


const getLenght = (string, lengthNumber = 140) => {
  if (typeof string !== 'string' || typeof lengthNumber !== 'number') {
    throw new Error('Строка не подходит по типу данных');
  }
  return string.length <= lengthNumber;
};
