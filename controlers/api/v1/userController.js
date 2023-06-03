const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const env = require('../../../config/environment');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
    try{
        // check if user already exist or not
        const user = await User.findOne({email: req.body.email});
        if(!user){
            const password = req.body.password.toString();
            const hashedPassword = await bcrypt.hash(password, 10);
            // req.body.password = hashedPassword;

            // const newUser = await User.create(req.body);
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                role: req.body.role
            });

            console.log("new user created", newUser);
            return res.status(200).json({
                success: true,
                message: "User created successfully",
                newUser_id: newUser._id 
            })
        }else{
            // if user already exist so return user info
            return res.status(200).json({
                success: true,
                message: "user already exist",
                userInfo: user
            })
        }

    }catch(err){
        console.log('error in resister user', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports.login = async (req, res)=>{
    try{
        const user = await User.findOne({"email": req.body.email});
        console.log(user);
        const password = req.body.password.toString();
        const matchPassword = await bcrypt.compare(password, user.password);

        if(user && matchPassword){
            return res.status(200).json({
                success: true,
                message: "user login successfull",
                token: jwt.sign(user.toJSON(), env.secretOrKey, {expiresIn: '1000000'})
            })
        }else{
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            });
        }
    }catch(err){
        console.log('error in user login', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}