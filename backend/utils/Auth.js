const bcrypt = require("bcryptjs");
const User =  require("../models/User.model");

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

const validateUsername = async(username) =>{
    let user = await User.findOne({username});
    return user ? false: true;
};

const validateEmail = async(email) =>{
    let user = await User.findOne({email});
    return user ? false: true;
};

module.exports = {
    userRegister
};