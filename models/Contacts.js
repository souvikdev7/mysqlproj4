let dbCon = require('../config/db');

const sequelize = dbCon.SequelizeTZ;


class Contacts extends dbCon.Model {}

Contacts.init(
  {
    id: {
      type: dbCon.DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    sid: {
      type: dbCon.DataTypes.INTEGER,
      unique:true, 
    },
    address: {
      type: dbCon.DataTypes.STRING,
      allowNull:true,
    },
    favs: {
        type: dbCon.DataTypes.STRING,
        allowNull:true,
      },
  }, 
  {  
    sequelize,
    modelName: 'contacts', // We need to choose the model/table name
    freezeTableName: true,
    timestamps : false
  }
);

module.exports = Contacts;
