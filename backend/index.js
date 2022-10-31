const cors= require("cors");
const express = require("express");
const bp = require("body-parser");
const { success, error}  = require("consola");
const { connect } = require("mongoose");
const passport =  require("passport");

//bring the app constrants
const { DB,PORT } = require("./config");

// intialize the app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// User router Middleware
app.use("/api/users",require("./routes/users"));

//connection
const startApp = async() =>{
    try{
        await connect(DB,{
            // useFindAndModify:true,
            // useUnifiedTopology:true,
            // useUrlParser:true
        });
        success({
            message:`Successfully connected with the Database \n ${DB}`,
            badge:true
        });
        app.listen(PORT,() => 
        success({message:`Server started on port ${PORT}`,badge:true})
        );
    }
    catch(err){
        error({
            message:`Unable to connect with Database \n ${err}`,
            badge:true
        });
        startApp();
    }
};
startApp();