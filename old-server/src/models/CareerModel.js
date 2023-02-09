import { DataTypes, Model } from "sequelize";
import db from "../connections/DBConnection.js";

class Career extends Model { }

Career.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headId: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: "career"
})

Career.sync()

export default Career