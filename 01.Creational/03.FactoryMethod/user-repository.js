var UserRepository = function(){

    var _save = function(user){
        console.log('Saving user : ' + user.name);
    }

    return {
        save : _save
    }
}

module.exports = UserRepository();