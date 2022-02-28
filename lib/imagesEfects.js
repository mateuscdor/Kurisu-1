var utils = require('../utils');
var fs = require('fs');
const path = require('path');
var sharp=require('sharp');

const wasted = async (image) => {
  const imageUrl = await utils.uploadImage(image);
  return `https://some-random-api.ml/canvas/wasted?avatar=${imageUrl}`;

}
const sticBufferToImage = async (buffer, callback) => {
  var pat = path.join(__dirname, '..', '/temp/' + Date.now() + '.png')
  sharp(buffer)
  .toFile(pat)
  .then(async(info) => { await callback(pat); fs.unlinkSync(pat) })
  .catch(err => { console.log(err); callback(null,true) });
  return true;
}

module.exports = {
  wasted,
  sticBufferToImage
}