const {  Sequelize, DataTypes, Model } = require("sequelize");
 
// create connection
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging : false, // false OR console.log
    pool: {max:5,min:0, idle:10000}
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} 
catch (error) {
    console.error('Unable to connect to the database:', error);
}


let dbcon = {};
dbcon.Sequelize = Sequelize;
dbcon.SequelizeTZ = sequelize;
dbcon.Model = Model;
dbcon.DataTypes = DataTypes;
module.exports = dbcon;