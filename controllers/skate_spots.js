const express = require('express');
const router = express.Router();
const methodOverride = require('method-override')
const Spots = require('../models/skate_spots.js')



router.get('/spots/:id/edit', (req, res) => {
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
    res.redirect('/spots')
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
                spots:showSpot
            }
        )
    })
})



router.post('/spots', (req, res) => {
    Spots.create(req.body, (error, createdSpot) => {
        res.redirect('/spots');
    })
})

router.delete('/spots/:id', (req, res) => {
  Spots.remove({}, (error, deletedSpot) => {
    res.redirect('/spots')
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

module.exports = router;
