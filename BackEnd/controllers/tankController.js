
const Tank = require('../models/Tank');
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

module.exports = function(app){

    app.post("/addTank", async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        const newTank = new Tank(req.body);

        try {
            const savedTank = await newTank.save();
            res.status(200).json(savedTank);
        } catch (err) {
            res.status(500).json(err);
        }
    });
    //write a get function to get tank details from tank collection
    app.get("/getTank", async (req, res) => {
        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        try {
            const tank = await Tank.find();
            res.status(200).json(tank);
        } catch (err) {
            res.status(500).json(err);
        }
    })

    app.post("/getValues", async (req, res)=> {
        var ammonia = req.body.ammonia;
        var ph = req.body.ph;
        var temp = req.body.temp;
        var ranges = {}
        if(ammonia> 0.02){
            ranges.ammonia = 3;
            let info = await transporter.sendMail({
                from: '"AquaHarvest" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Alert", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });
        }
        else{
            ranges.ammonia = 1;
        }
        if(ph>6.5 && ph < 9){
            ranges.ph = 1;
        }
        else if(ph>7 && ph<9.5){
            ranges.ph = 2;
        }
        else{
            ranges.ph = 3;
        }
        if(temp> 20 && temp < 30){
            ranges.temp = 1;
        }
        else if(temp> 15 && temp < 35){
            ranges.temp = 2;
        }
        else{
            ranges.temp = 3;
        }
        res.send(ranges);
    })
}