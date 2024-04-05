const {sequelize} = require('../../index');
const {DataTypes} = require('sequelize');

const Successstory = sequelize.define("successstory",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    weddingpic:{
        type:DataTypes.STRING,
        allowNull:true
    },
    bridename:{
        type:DataTypes.STRING,
        allowNull:true
    },
    groomname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    city:{
        type:DataTypes.STRING,
        allowNull:true
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    }
})


module.exports = {Successstory}