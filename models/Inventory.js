let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Inventory extends dbCon.Model {}

Inventory.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    pid: {
      type: dbCon.DataTypes.INTEGER  
    },
    status: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:true,
    }
  }, 
  {  
    sequelize, // We need to pass the connection instance
    modelName: 'inventory', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Inventory;
