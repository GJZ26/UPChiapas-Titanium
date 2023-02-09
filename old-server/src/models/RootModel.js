import { DataTypes, Model } from "sequelize";
import db from "../connections/DBConnection.js";

class Root extends Model { }

Root.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passsword: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize:db,
        tableName:"root"
    })

Root.sync()

export default Root