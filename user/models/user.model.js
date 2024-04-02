const { sequelize } = require('../../index');
const { DataTypes } = require('sequelize');
const { Userprofile } = require('./userprofile.model');


const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    middlename: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    district: {
        type: DataTypes.STRING,
        allowNull: true
    },
    taluka: {
        type: DataTypes.STRING,
        allowNull: true
    },
    town: {
        type: DataTypes.STRING,
        allowNull: true
    },
    postalcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateofbirth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    friendRequests: {
        type: DataTypes.JSON,
        defaultValue: { "sent": [], "received": [] }
    },
    friendLists: {
        type: DataTypes.JSON,
        defaultValue: { "list": [] }
    }

})

module.exports = { User }
