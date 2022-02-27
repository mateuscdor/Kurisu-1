var fs = require('fs');
var c = require('./config/commands.json')
const sharp = require('sharp');
const path = require('path');

var n1 = '50370649152@s.whatsapp.net';
var n2 = '50379404214@s.whatsapp.net';

const imgbbUploader = require("imgbb-uploader");
const config = require('./config/config.js');

const uploadImage = async (img, name, expiration, format = 'jpg') => {
  return new Promise(async (resolve, reject) => {    
    var fileDelete = false;    
    if (typeof(img)=='object') {      
      let pathh = path.join(__dirname, /*'..' ,*/'/temp/' + Date.now() + '.' + format);
      fs.writeFileSync(pathh, img);
      img = pathh;
      fileDelete = true;
      console.log('siu?'+format)
    }
    console.log('nose')
    var _name = name ? name : Date.now();
    var _expiration = expiration ? expiration : 120;

    if (!img) return 'error';
    const options = {
      apiKey: config.imgbb_apikey,
      imagePath: img,
      name: _name,
      expiration: _expiration
    };
    
    imgbbUploader(options)
      .then((response) => { if (fileDelete) fs.unlinkSync(img);  return resolve(response.url) })
      .catch((error) => { return reject({ error: true, reason: error })});
  
  })
}


(async function () {
  var x = await uploadImage('./gUsZT.jpg', 'siuuuu22222')
  
  console.log(x)

})();


//VERF ADMIN
/*
var x = m.participants.find(x => x.id == n1 && x.admin);
console.log(x ? x : false)
*/


//MENUS
/*
c.categories.fun={meme:"Obten un meme random",simi:'Usa este comando para hablar con simsimi.', roll:'Lanza los dados y mira que sale.',hub:"Obten una imagen con el estilo de ****hub.","8ball":'preguntale al bot cosas de respuesta simple (si, no, talvez).',"frase":"El bot te dira una frase de algun anime."};
c.categories.stickers={"sticker":"El bot procesara la imagen/video/gif y lo convertira en sticker","snime":"El el bot enviara un sticker de anime random","doge":"El bot respondera con un sticker de doge random."};
c.categories.Admin={"tagall":"El bot enviara un mensaje etiquetando a todos los miembros del grupo.","op":"Designa a otro como admin.","deop":"Le quita los privilegios de administrador al usuario mencionado.","kick":"Expulsa del grupo al usuario mencionado."};
c.categories.misc={"music":"Envia el nombre o enlace de youtube de cualquier cancion y el bot te la devolvera como audio","ytsearch":"Escribe lo que quieras buscar en youtube y el bot te dara el enlace a youtube"};
c.categories.SFW={husb:'El bot envia una imagen de un husbando random',waifu:'El bot envia una imagen de una waifu random'};
c.categories.NFSW={waifuh:'El bot envia una imagen de waifu NFSW random, esta tiene el modo solo ver una vez', yaoi:'El bot envia una imagen de yaoi NFSW random, esta tiene el modo solo ver una vez'};
fs.writeFileSync('./config/commands.json', JSON.stringify(c))
*/


