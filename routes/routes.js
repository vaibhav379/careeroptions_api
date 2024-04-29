const express = require('express');
const router = express.Router();
const career  = require('./career');


router.use('/career',career);

router.get('/test',(req,res)=>{
res.send('api working!');
})

module.exports = router;