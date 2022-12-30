const Tank = require('../models/Tank');
module.exports = function(app){
    app.get('/getProgress', async (err, req, res, next) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        var fishDetails = {
            Mrigal: 365,
            Catla: 365,
            Catfish: 243
        }
        var currentDate = new Date();
        console.log(currentDate);
        var startDate = new Date("12/30/2022");
        var days =  parseInt((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        console.log(days);
        try{
            var response = await Tank.find({tankName: req.query.tankName});
            res.json(days);
        }catch(err){
            res.status(500).json(err);
        }
    })
}