greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'});
};

new_greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee, CI/CD pipeline'});
};

module.exports = {
    greetings, 
    new_greetings
}
