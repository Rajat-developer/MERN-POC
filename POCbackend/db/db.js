const mongoose = require('mongoose')
const connection = mongoose.connect(mongoUri `${process.env.mongoUri}`)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
   

   module.exports = connection;  