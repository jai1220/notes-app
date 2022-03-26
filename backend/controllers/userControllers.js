const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');


const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, pic } = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const createUser = await User.create({
        name,
        email,
        password,
        pic
    });

    if(createUser){
        res.status(200).json({
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            isAdmin: createUser.isAdmin,
            pic: createUser.pic
        });
    }else{
        res.status(400);
        throw new Error("Error Occured");
    }
});

module.exports = {registerUser};