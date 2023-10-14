const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bendzsiott1998:Scooter@cluster0.iffvbdv.mongodb.net/Rollin?retryWrites=true&w=majority&appName=AtlasApp')
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection error:', err));

module.exports = mongoose;
