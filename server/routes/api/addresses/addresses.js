const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    return req.body.Address.forge({
        street_address: req.body.street_address,
        zipcode: req.body.zipcode
        // person_id:
    })
})

module.exports = router;