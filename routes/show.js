const ShortUrl  = require('../models/shorturl2.js')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

router.get('/' , async(req,res)=>{
  const shortUrls =await ShortUrl.find();
  console.log(shortUrls);
  res.render('display',{
    shortUrls:shortUrls
  })
})

router.get('/:shorturl',async(req,res)=>{
  console.log(req.params.shorturl);
  const shortUrl =await ShortUrl.findOne({short:req.params.shorturl})

  if(shortUrl==null)return res.sendStatus(404)

  ShortUrl.clicks++
  ShortUrl.save()
  res.redirect(ShortUrl.full)
})

module.exports = router
