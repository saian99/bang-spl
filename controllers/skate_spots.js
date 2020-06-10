const express = require('express');
const router = express.Router();
const methodOverride = require('method-override')
const Spots = require('../models/skate_spots.js')



router.get('/:id/edit', (req, res) => {
  Spots.findById(req.params.id, (error, foundSpot) => {
    res.render('edit.ejs',
    {
      spots:foundSpot
    }
  )
  })
})

router.put('/spots/:id', (req, res) => {
  Spots.findByIdAndUpdate(req.params.id, req.body, (err, updatedSpot) => {
    res.redirect('/')
  })
})
//


router.get('/spots/new', (req, res) => {
    res.render('new.ejs');
});

router.get('/spots/:id/show', (req, res) => {
    Spots.findById(req.params.id, (error, showSpot) => {
        res.render(
            'show.ejs',
            {
              spots: showSpot
            }
        )
    })
})



router.post('/', (req, res) => {
    Spots.create(req.body, (error, createdSpot) => {
        res.redirect('/');
    })
})

router.delete('/:id', (req, res, next) => {
Spots.remove({}, (error, data) => {
    res.redirect('/')
  })
})

router.get('/', (req, res) => {
    Spots.find({}, (error, allSpots) => {
        res.render(
            'index.ejs',
            {
                spots: allSpots
            }
        );
    })
});

router.get('/spots/about', (req, res) => {
  res.render('about.ejs')
})

module.exports = router;
