const bcrypt = require("bcryptjs");
const User =  require("../models/User.model");
const jwt = require("jsonwebtoken");
const {SECRET} = require("../config")

/***
 * @DESC To register  the user (reader,writer,admin)
 */

const userRegister = async(userDets,role,res) =>{
   try{

     // validate user
     let usernameNotTaken = await validateUsername(userDets.username);
     if(!usernameNotTaken){
         return res.status(400).send({
             message: 'Username already exists',
             success: false
         });
     }
 
     // validate the email
     let emailNotRegistered = await validateEmail(userDets.email);
     if(!emailNotRegistered){
         return res.status(400).send({
             message: 'Email already exists',
             success: false
         });
     }
     // Get hashed password
     const password = await bcrypt.hash(userDets.password,12);
 
     // Create a new user
     const newUser = new User ({
         ...userDets,
         password,
         role
     });
 
     await newUser.save();
     return res.status(201).send({
         message:'Registered successfully!',
         success:true
     });
   }
   catch(err){ 
    return res.status(500).send({
        message:'Registration failed!',
        success:false
    });
   }
};

/***
 * @DESC to login the user(READER,WRITER,ADMIN)
 */

const userLogin = async(userCreds, role,res) =>{
    let { username, password } = userCreds;
    // first check if the username is in the database
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).send({
            message:"Username not found, Invalid login credentials!",
            success:false
        });
    }

    // We will check the role
    if(user.role !== role){
        return res.status(403).send({
            message:"Please make sure you are logging in from right  portal",
            success:false
        });
    }

    let isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username: user.username,
            email: user.email
        },
        SECRET,
        {expiresIn: "7 days"}
        );

        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        };

        return res.status(200).send({
            ...result,
            message:"Successfully logged in!",
            success: true
        });
    }
    else{
        return res.status(403).send({
            message:"Incorrect password",
            success:false
        });
    }
};

const validateUsername = async(username) =>{
    let user = await User.findOne({username});
    return user ? false: true;
};

const validateEmail = async(email) =>{
    let user = await User.findOne({email});
    return user ? false: true;
};

module.exports = {
    userRegister,
    userLogin
};