const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const generateToken = require('../utils/generateToken');


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
            pic: createUser.pic,
            token: generateToken(createUser._id),
        });
    }else{
        res.status(400);
        throw new Error("Error Occured");
    }
});

const authUser = asyncHandler(async(req, res) => {
    const {email, password } = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Invalid username or password!");
    }

    
});

module.exports = {registerUser, authUser};