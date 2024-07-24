const mongoose = require('mongoose')
const mongoUri ='mongodb+srv://fzdsharmarajat:8445234607@cluster0.fmkq5bm.mongodb.net/userdata?'
const connection = mongoose.connect(mongoUri)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
   

   module.exports = connection;  