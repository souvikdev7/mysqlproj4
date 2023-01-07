let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Product extends dbCon.Model {}

Product.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: dbCon.DataTypes.STRING,
      unique:true, 
    },
    price: {
      type: dbCon.DataTypes.DOUBLE,
      allowNull:true,
    },
    /*doj: {
      type: dbCon.DataTypes.DATE,
      allowNull:true,
      defaultValue : new Date().toISOString()
    }*/
  }, 
  {  
    sequelize, // We need to pass the connection instance
    modelName: 'product', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Product;
