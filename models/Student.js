let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Student extends dbCon.Model {}

Student.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: dbCon.DataTypes.STRING  
    },
    email: {
        type: dbCon.DataTypes.STRING  
    },
    phone: {
        type: dbCon.DataTypes.STRING  
    },  
    age: {
      type: dbCon.DataTypes.INTEGER
    }, 
    created_at: {
        type: dbCon.DataTypes.DATE,
        allowNull:true,
        defaultValue : new Date().toISOString()
    },
    updated_at: {
        type: dbCon.DataTypes.DATE,
        allowNull:true,
        defaultValue : new Date().toISOString()
      }
  }, 
  {  
    sequelize, // We need to pass the connection instance
    modelName: 'students', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Student;
