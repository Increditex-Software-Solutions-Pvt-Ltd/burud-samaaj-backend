const {sequelize} = require('../../index');
const {DataTypes} = require('sequelize');

const Successvideo = sequelize.define("successvideo",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    videourl:{
       type:DataTypes.STRING,
       allowNull:true
    },
    year:{
        type:DataTypes.STRING,
        allowNull:true
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    }
})


module.exports = {Successvideo}