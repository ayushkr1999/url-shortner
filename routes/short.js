const ShortUrl  = require('../models/shorturl2.js')
const mongoose =require('mongoose')
const express = require('express');
const router = express.Router();

router.post('/',async (req,res)=>{
  console.log(req.body.fullUrl);
  await ShortUrl.create({full: req.body.fullUrl})
  res.redirect('/show')
})

module.exports =router
