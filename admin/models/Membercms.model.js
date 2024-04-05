const {sequelize} = require('../../index');
const {DataTypes} = require('sequelize');


const Member = sequelize.define("member",{
    memberpic:{
        type:DataTypes.STRING,
        allowNull:true
    },
    membername:{
        type:DataTypes.STRING,
        allowNull:true
    },
    position:{
        type:DataTypes.STRING,
        allowNull:true
    }
})


module.exports = {Member}