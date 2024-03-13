const {sequelize} = require('../index');
const {DataTypes} = require('sequelize');

const User = sequelize.define("user",{
    firstname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true
    },
    phone:{
        type:DataTypes.NUMBER,
        allowNull:true
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:true
    },
    city:{
        type:DataTypes.STRING,
        allowNull:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    },
    dateofbirth:{
        type:DataTypes.DATE,
        allowNull:true
    }

})

module.exports = {User}
