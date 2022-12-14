const {Schema,model} = require("mongoose");

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        role:{
            type: String,
            default: "reader",
            enum:["reader","writer","admin"]
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

module.exports  = model("users", UserSchema);