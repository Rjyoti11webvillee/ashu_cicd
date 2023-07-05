greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'});
};


module.exports = {
    greetings, 
}
