const express = require("express");
const User = require("./Schema");
const multer = require("multer");


let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads');
    },
    filename: function (req,file, cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    },
});

const upload = multer( {storage: storage} );

router.post("/validateUser", upload.none(), async (req,res) => {

    console.log(req.body);

    let userDetails = await User.find().and({email: req.body.email});

    console.log(userDetails);

    if(userDetails.length > 0){
        // user Exists
        if(userDetails[0].password == req.body.password){
           res.json({status:"success", data: userDetails[0]});
        }else{
            res.json({status:"failed", msg: "email or password is incorrect"});
        }
    }else{
        //user Doesn't Exists 
        res.json({status:"failed", msg:"User Doesn't exist"});
    }
})

module.exports = router;