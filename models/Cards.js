let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Cards extends dbCon.Model {}

Cards.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    cid: {
      type: dbCon.DataTypes.INTEGER,
      unique:true, 
    },
    cardno: {
      type: dbCon.DataTypes.STRING,      
    },
    exp: {
        type: dbCon.DataTypes.STRING,        
      },
  }, 
  {  
    sequelize,
    modelName: 'cards', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Cards;
