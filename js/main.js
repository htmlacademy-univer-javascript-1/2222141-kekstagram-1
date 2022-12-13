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

const getRandomInt = (min, max) => {
  if(min < 0 || max < 0) {
    return -1;
  }
  if(min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkMaxLength = (str, max = 100) => str.length <= max;
const arrayComments = (item) => {
  const arr = [];
  for (let i = 0; i < item; i++){
    arr.push({
      id: i,
      avatar: 'img/avatar-{{getRandomInt(1, 6)}}.svg',
      message: MESSAGES[getRandomInt(0, MESSAGES.length - 1)],
      name: NAMES[getRandomInt(0, NAMES.length - 1)]
    });
  }
  return arr;
};

const addPhotos = () => {
  for (let i = 0; i < COUNT; i++){
    arrayObjects.push({
      id: i,
      url: 'photos/{{i + 1}}.jpg',
      description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
      likes: getRandomInt(15, 200),
      comments: arrayComments(getRandomInt(0, 2))
    });
  }
};

addPhotos();
checkMaxLength('ggvtufvtfv');