module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
 
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        email: {
            type: DataTypes.STRING
        },
        address:{
            type:DataTypes.STRING
        },
        
        age:{
            type:DataTypes.STRING
        }
        
    
    },{timestamps:false})

    return User

}