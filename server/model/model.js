const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true,
        unique : true
    },
    gender : 
    {
        type : String,
        require : true
    },
    status : 
    {
        type : String,
        require : true
    }

});

const User = mongoose.model('user',userSchema);
module.exports = User;
