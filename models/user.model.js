const {sequelize} = require('../index');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
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
        type:DataTypes.INTEGER,
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
