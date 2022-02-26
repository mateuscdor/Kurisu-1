var fs = require('fs');
var c = require('./config/commands.json')
const sharp = require('sharp');

var n1 = '50370649152@s.whatsapp.net';
var n2 = '50379404214@s.whatsapp.net';
const {fetchJson}=require('fetch-json');
//console.log(m.participants)

(async(query)=>{
    var peli = await fetchJson.get(`https://kurisu-api.herokuapp.com/api/movie?search=${query}`)
    if (peli.error) return { text: 'Ocurrio un error inesperado' }
    var puntuacion = "";
    for (var i = 0; i < parseInt(parseInt(peli.score / 2)); i++) {
      puntuacion += "⭐"
    }
  //console.log(peli)
    
  console.log( { image: { url: peli.poster }, caption: "\n*🗡️Titulo🗡️:* " + peli.title + "\n\n*🕘Año de estreno🕘:* " + peli.year + "\n\n*⚔Generos⚔:* " + peli.genres.join('✔ ') + '✔\n\n*puntuacion:*' + puntuacion + "\n\nsinopsis:" + peli.overview })
})('toy story')

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


