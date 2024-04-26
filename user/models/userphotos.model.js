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
    biopicOne:{
        type:DataTypes.STRING,
        allowNull:true
    },
    biopicTwo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    horoimage:{
        type:DataTypes.STRING,
        allowNull:true
    },
})

module.exports = {Userphoto}
