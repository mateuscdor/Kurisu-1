var fs = require('fs');
var c = require('./config/commands.json')
const sharp = require('sharp');
const path = require('path');
const m = require('./tets.json');
var n1 = '50370649152@s.whatsapp.net';
var n2 = '50379404214@s.whatsapp.net';
const solenolyrics = require("solenolyrics");
const imgbbUploader = require("imgbb-uploader");
const config = require('./config/config.js');




//VERF ADMIN
/*
var x = m.participants.find(x => x.id == n1 && x.admin);
console.log(x ? x : false)
*/


//MENUS
/*
c.categories.fun={meme:"Obten un meme random",simi:'Usa este comando para hablar con simsimi.', roll:'Lanza los dados y mira que sale.',hub:"Obten una imagen con el estilo de ****hub.","8ball":'preguntale al bot cosas de respuesta simple (si, no, talvez).',"frase":"El bot te dira una frase de algun anime.","anime":"Ire a buscar el anime que me digas y te date todos sus datos(si no me dices ningun nombre te dire uno random).","movie":"Dime el nombre de una pelicula y la ire a buscar por ti."};
c.categories.stickers={"sticker":"El bot procesara la imagen/video/gif y lo convertira en sticker","snime":"El el bot enviara un sticker de anime random","doge":"El bot respondera con un sticker de doge random.","img":"responde con esto a un sticker y te convertire el sticker en imagen."};
c.categories.Admin={"tagall":"El bot enviara un mensaje etiquetando a todos los miembros del grupo.","op":"Designa a otro como admin.","deop":"Le quita los privilegios de administrador al usuario mencionado.","kick":"Expulsa del grupo al usuario mencionado."};
c.categories.misc={"music":"Envia el nombre o enlace de youtube de cualquier cancion y el bot te la devolvera como audio","ytsearch":"Escribe lo que quieras buscar en youtube y el bot te dara el enlace a youtube","lyrics":"Escribe el nombre de una cancion y te buscare la letra.","ws":"Ire a la pagina web que me digas y te enviare una screnshoot.","say":"Dire lo que tu escribas en el idioma que quieras($languaje)"};
c.categories.SFW={husb:'El bot envia una imagen de un husbando random',waifu:'El bot envia una imagen de una waifu random'};
c.categories.NFSW={waifuh:'El bot envia una imagen de waifu NFSW random, esta tiene el modo solo ver una vez', yaoi:'El bot envia una imagen de yaoi NFSW random, esta tiene el modo solo ver una vez'};
fs.writeFileSync('./config/commands.json', JSON.stringify(c))

*/

