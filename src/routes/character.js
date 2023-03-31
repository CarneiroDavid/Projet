var express = require('express');

const router = express.Router();

router.get('/',function(req,res){
    res.render('index.ejs');
});
router.get('/:name', function(req, res){
    let character = req.params.name;
    if(character == "malphite" || character == "syndra"){
        res.render(`${character}.ejs`);
    }else{
        res.render('index.ejs');
    }
});

module.exports = router;