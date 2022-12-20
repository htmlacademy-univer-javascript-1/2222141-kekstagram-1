import { arrayObjects } from './data.js';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const element = pictureTemplate.cloneNode(true);
  element.src = photo.url;
  element.querySelector('.picture__likes').textContent = photo.likes;
  element.querySelector('.picture__comments').textContent = photo.comments.length;

  return element;

};

const renderPhotos = () => {
  arrayObjects.forEach((photo) => {
    fragment.appendChild(renderPhoto(photo));
  });

  picturesBlock.appendChild(fragment);
};

renderPhotos();
