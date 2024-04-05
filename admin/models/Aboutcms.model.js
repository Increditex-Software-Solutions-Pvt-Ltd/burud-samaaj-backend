const {sequelize} = require('../../index');
const {DataTypes} = require('sequelize');


const About = sequelize.define("about",{
    aboutwebsite:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    adhykshmanogat:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    sachivmanogat:{
        type:DataTypes.TEXT,
        allowNull:true
    }
})


module.exports = {About}