const User = require('../model/model');

//create and save new user
exports.create = async (req,res) => {
    //validate req
    if(!req.body)
    {
        res.status(400).send({message:'content canot be empty'});
        return;
    }
   
    try
    {
        const {name,email,gender,status} = req.body;
        // new user 
        const user = new User({name,email,gender,status});
        //save document
        await user.save();
        res.status(201).json({message:'successfully saved'});
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
        console.log('Data is not saved');
    } 
}

//retrieve and return all users/ single user
exports.find = (req,res) => {

}

//update a new identified user by user id
exports.update = (req,res) => {

}
//delete user by spceified id
exports.delete = (req,res) => {

}