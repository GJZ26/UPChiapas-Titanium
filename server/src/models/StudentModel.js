import { DataTypes, Model } from "sequelize";

import db from "../connections/DBConnection.js";

class Student extends Model {}

Student.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstLastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondLastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName:"students",
    sequelize:db
})

Student.sync()

export default Student