let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Purchase extends dbCon.Model {}

Purchase.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    sid: {
      type: dbCon.DataTypes.INTEGER  
    },
    pid: {
        type: dbCon.DataTypes.INTEGER  
    }   
  }, 
  {  
    sequelize, // We need to pass the connection instance
    modelName: 'purchase', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Purchase;
