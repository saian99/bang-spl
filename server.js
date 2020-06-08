// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
require('dotenv').config()
const spots = require('./models/skate_spots.js')
// PORT
const PORT = process.env.PORT || 3333
// Database
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// middleware
// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
// routes
app.get('/spots', (req, res) => {
  res.render('index.ejs', {allSpots: spots})
})

app.get('/spots/new', (req, res) => {
  res.render('new.ejs')
})

app.post('/spots', (req, res) => {
  const addedSpot = {
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
  }
  spots.push(addedSpot)
  res.redirect('/spots')
})

app.delete('/spots/:id', (req, res) => {
  spots.splice(req.params.id, 1)
  res.redirect('/spots')
})

app.get('/spots/:id/edit', (req, res) => {
  res.render('edit.ejs')
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
