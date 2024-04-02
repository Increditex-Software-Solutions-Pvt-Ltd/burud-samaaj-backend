const {sequelize} = require('../../index');
const {DataTypes} = require('sequelize');

const Userphoto = sequelize.define('userphoto',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    profilepic:{
        type:DataTypes.STRING,
        allowNull:true
    },
    biopic1:{
        type:DataTypes.STRING,
        allowNull:true
    },
    biopic2:{
        type:DataTypes.STRING,
        allowNull:true
    },
    horoimage:{
        type:DataTypes.STRING,
        allowNull:true
    },
})

module.exports = {Userphoto}
