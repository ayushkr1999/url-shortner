const ShortUrl  = require('../models/shorturl2.js')
const mongoose =require('mongoose')
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('index')
})

router.get('/:shorturl',async(req,res)=>{
  console.log(req.params.shorturl);
  const shortUrl =await ShortUrl.findOne({short:req.params.shorturl})

  if(shortUrl==null)return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()
  res.redirect(shortUrl.full)
})



module.exports = router
