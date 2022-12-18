import { getRandomInt } from './get-random-number';

const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

export {getRandomElement};
