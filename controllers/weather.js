const express = require('express');
const router = express.Router();
const Weather = require('../models/weather.js')
// Remember INDUCES

// Index
router.get('/', (req, res)=>{
    Weather.find({}, (err, foundWeather)=>{
        res.json(foundWeather)
    })
});
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res)=>{
    Weather.findByIdAndRemove(req.params.id, (err, deletedWeather)=>{
        res.json(deletedWeather)
    })
});
// Update
router.put('/:id', (req, res)=>{
    Weather.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWeather)=>{
        res.json(updatedWeather)
    })
});
// Create
router.post('/', (req, res)=>{
    Weather.create(req.body, (err, createdWeather)=>{
        res.json(createdWeather) //.json() will send proper headers in response so client knows it's json coming back
    })
})
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Weather.findById(req.params.id, (err, foundWeather)=>{
        res.json(foundWeather)
    })
})


module.exports = router