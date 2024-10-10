

import express from 'express';
 
const router = express.Router();

router.get ('/', (req, res) =>{
    res.send('user list')

}) 

router.get('/new', (req, res) => {
    res.send('user new form')
})

module.exports = router