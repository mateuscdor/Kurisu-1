var utils = require('../utils');
const wasted = async (image) => {
  const imageUrl = await utils.uploadImage(image);
  console.log('enviando wasted');
  return `https://some-random-api.ml/canvas/wasted?avatar=${imageUrl}`;

}

module.exports={
  wasted
}