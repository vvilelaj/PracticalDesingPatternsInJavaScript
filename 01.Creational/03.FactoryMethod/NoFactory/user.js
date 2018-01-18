var User = function (name){
    this.name = name;
}

User.prototype.toString = function(){
    console.log('User : ' + this.name);
}

module.exports = User;