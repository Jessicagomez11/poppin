module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User",{
        userName:DataTypes.STRING
    })
    //add an association to the parties this user created
    return User;
}