import { DataTypes, Model } from "sequelize";
import db from "../connections/DBConnection.js";

class Subject extends Model { }

Subject.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    scor_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: "subject"
})

Subject.sync()

export default Subject