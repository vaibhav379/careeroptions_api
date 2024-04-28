const express = require('express');
const careerBL = require('../logic/careerBL');
const { success } = require('../util/statuscodes');
const router = express.Router();



router.post('/getPromptResponse', async (req,res)=>{
    let promptResult = await careerBL.getPromptResponse(req.body);
    res.send(success(promptResult));
});


module.exports = router;