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
})

const upload = multer( {storage: storage} );

router.post("/userDetails", upload.array("profile"), async (req,res) => {

    console.log(req.body);

    let userArr = await User.find().and({email:req.body.email});

    if(userArr.length > 0){
        res.json({status:"failed", msg:"user Already Exists"});
    }else{
        try {
            let newUser = new User({
    
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
                address: req.body.address,
                birthday: req.body.birthday,
                gender: req.body.gender,
                age:req.body.age,
                interests: req.body.interests,
                profile: req.files[0].path,
    
            })
    
            await newUser.save();
            res.json({status:"Success", msg:"User Created Successfully"});
        } catch (error) {
            console.log("Unable to create User");
            res.json({status:"failed", msg:error});
        }
    }

   
})

router.post("/updateProfile", upload.array("profile"), async (req,res) => {

    console.log(req.body);
    
    try {
        console.log(req.body);
        console.log("uploaded files from the user");
        console.log(req.files);

        await User.updateMany({email: req.body.email},
            {
                firstName: req.body.firstName,
                age:req.body.age,
                password: req.body.password,
                phone: req.body.phone,
                profile: req.files[0].path,
            });
        res.json({status:"success", msg: "user profile updated successfully"});
    } catch (error) {
        
    }

});

router.delete("/deleteProfile", async (req,res)=>{

    try {
        await User.deleteMany({email:req.query.email});
        console.log("Account Deleted Successfully");
        res.json({status:"success", msg:"Account Deleted Successfully"})
    } catch (error) {
        console.log("Unable to Delete the Account");
    }
})

module.exports = router;
