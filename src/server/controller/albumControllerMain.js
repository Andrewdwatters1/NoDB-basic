var musicData = require('./localData');

let id = 4;
module.exports = {

  readAlbum: (req, res) =>{
    res.status(200).send(musicData);
  },

  updateAlbum: (req, res) =>{
    console.log('body', req.body);
    console.log('params',req.params);
    console.log('query',req.query)
    let { id } = req.params;
    let { artist, album, year } = req.body;
    for (let i = 0; i < musicData.length; i++) {
      if (musicData[i].id === Number(id)) {
        if (artist) musicData[i]['artist'] = artist;
        if (album) musicData[i]['album'] = album;
        if (year) musicData[i]['year'] = year;
      }
    }
    return res.status(200).send(musicData)
  },

  createAlbum: (req, res) =>{
    let { artist, album, year } = req.body;
    let newAlbum1 = {
      id,
      artist,
      album,
      year
    }
    id++;
    musicData.push(newAlbum1);
    res.status(200).send(musicData);
  },

  deleteAlbum:(req, res) =>{
    let { id } = req.params;
    for (let i = 0; i < musicData.length; i++) {
      if (musicData[i].id === Number(id)) musicData.splice(i, 1);
    }
    res.status(200).send(musicData);
  }
}