const Tank = require('../models/Tank');
module.exports = function(app){
    app.get('/getProgress', async (req, res) => {
        try{
            var resp = await Tank.find({tankName: req.query.tankName});
            res.json(resp);
        }catch(err){
            res.status(500).json(err);
        }
    })
}