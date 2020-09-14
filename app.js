const express = require('express')
// const mongoose = require('mongoose')
// const shortUrl  = require('./models/shorturl2')
const connectDB = require('./config/db.js')
const app = express();
connectDB();


app.set('view engine','ejs')
app.use(express.urlencoded({ extended:false}))
app.use('/short',require('./routes/short'))
app.use('/show',require('./routes/show'))
app.use('/',require('./routes/index'))

const PORT =process.env.PORT || 5001

app.listen(PORT,()=>{
  console.log(`server running on ${PORT}`);
});
