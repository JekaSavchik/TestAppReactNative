import Unsplash, { toJson } from 'unsplash-js/native';

const unsplash = new Unsplash({
  accessKey: 'jRcp8a2ynUpKhXOCXw0u6GVoHrJS2tG-gnZmQxkrEdA',
});

export default {
  listPhotos: unsplash.photos.listPhotos,
  toJson,
};
