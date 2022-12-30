const Tank = require('../models/Tank');
module.exports = function(app){
    app.get('/getTask', async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        try{
            var manure = {
                1: "Put manure. RCD = 5000 Kgs/ha soak in water. Single super phosphate (SSP) =250 Kgs/ha overnight and Ground nut oil cake (GNO) = 250 Kgs/ha spread over the water.",
                2: "Put manure. RCD = 2500 Kgs/ha soak in water. Single super phosphate (SSP) =125 Kgs/ha overnight and Ground nut oil cake (GNO) = 125 Kgs/ha spread over the water."
            }
            var currentDate = new Date();
            console.log(currentDate);
            var response = await Tank.find({userToken: req.query.userToken});
            var resArray = []
            //res.json(response);
            response.forEach(el => {
                el.fish.forEach(fish => {
                    var startDate = new Date(fish.fishStartDate);
                    var days =  parseInt((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
                    console.log(days);
                    if(days==0 || days==1){
                        resArray.push(manure[days+1]);
                    }
                });
            });
            res.json(resArray);
        }catch(err){
            res.status(500).json(err);
        }
    })
}