import { DataTypes, Model } from "sequelize";
import db from "../connections/DBConnection.js";

class Group extends Model{}

Group.init({
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.BIGINT
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:db,
    tableName:"group"
})

Group.sync()

export default Group