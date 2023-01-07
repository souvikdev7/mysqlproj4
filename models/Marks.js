let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Marks extends dbCon.Model {}

Marks.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    sid: {
      type: dbCon.DataTypes.STRING
    },
    subject: {
        type: dbCon.DataTypes.INTEGER  
    },
    marks: {
        type: dbCon.DataTypes.INTEGER  
    }   
  }, 
  {  
    sequelize, // We need to pass the connection instance
    modelName: 'marks', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Marks;
