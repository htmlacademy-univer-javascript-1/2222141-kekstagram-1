import {getRandomInt} from './get-random-number';
import {getRandomElement} from './util';

const COUNT = 25;

const NAMES = [
  'Артем',
  'Юлия',
  'Сергей'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Любимый снимок',
  'Фото из альбома',
  'Как вам эта фотка?'
];

const arrayObjects = [];

const arrayComments = (item) => {
  const arr = [];
  for (let i = 0; i < item; i++){
    arr.push({
      id: i,
      avatar: 'img/avatar-{{getRandomInt(1, 6)}}.svg',
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES)
    });
  }
  return arr;
};
const addPhotos = () => {
  for (let i = 0; i < COUNT; i++){
    arrayObjects.push({
      id: i,
      url: 'photos/{{i + 1}}.jpg',
      description: getRandomElement(DESCRIPTIONS),
      likes: getRandomInt(15, 200),
      comments: arrayComments(getRandomInt(0, 2))
    });
  }
};
export{addPhotos};
export {arrayObjects};
