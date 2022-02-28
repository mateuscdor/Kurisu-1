const shorturl = require('short-urls');
const solenolyrics = require("solenolyrics");

const short = async (link) => {
    //link="https://www.hoohle.com"
    //var resource = {"link":"http://youtube.com"};
    const x = await shorturl(link, 'l-o-l');
    console.log(x.short)
    return x.short;
}

const WebShot = async (url, fullpage) => {
    return fullpage ? `https://kurisu-api.herokuapp.com/api/ws?url=${url}&full_page=true` : `https://kurisu-api.herokuapp.com/api/ws?url=${url}`;
}

const lyrics = async (query) => {
    try {
        var lyrics = await solenolyrics.requestLyricsFor(query);
        var tittle = await solenolyrics.requestTitleFor(query);
        var autor = await solenolyrics.requestAuthorFor(query);        
        if (!lyrics) return 'Cancion no encontrada.';
        return `*${tittle}*\n${autor}\n\n${lyrics}`;
    }catch(err){
        console.log(err);
        return 'Cancion no encontrada.';
    }

}

module.exports = {
    short,
    WebShot,
    lyrics
}