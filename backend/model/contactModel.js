const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullname:{
        type:String,
    },
    emailaddress:{
        type:String,
    },
    phonenumber:{
        type:String,
    },
    message:{
        type:String,
    }
});
const contactModel = mongoose.model("contact", contactSchema);

module.exports=contactModel;