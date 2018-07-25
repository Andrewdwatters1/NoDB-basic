const express = require('express');
const bodyParser = require('body-parser');
const ac = require('./controller/albumControllerMain');

const app = express();

app.use(bodyParser.json());

app.get(`/api/album`, ac.readAlbum)
app.put(`/api/album/:id`, ac.updateAlbum)
// this may need modified 
app.post(`/api/album`, ac.createAlbum)
app.delete(`/api/album/:id`, ac.deleteAlbum)

const port = 3777;
app.listen(port, () => {
  console.log("Loud and clear on port:", port);
})