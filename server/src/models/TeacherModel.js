import { DataTypes, Model, TEXT } from "sequelize";
import db from "../connections/DBConnection.js";

class Teacher extends Model{}

Teacher.init({
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    birthday:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    phone:{
        type:DataTypes.BIGINT,
        allowNull:false
    },
    studyGrade:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"teacher"
})

Teacher.sync();

export default Teacher