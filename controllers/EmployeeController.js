const Product = require('../models/Product');
const { QueryTypes } = require('sequelize');
let dbCon = require('../config/db');
const sequelize = dbCon.SequelizeTZ;
const Inventory = require('../models/Inventory');
const Student = require('../models/Student');
const Purchase = require('../models/Purchase');
const Marks = require('../models/Marks');

const index = async (req, res, next) => {
  try {    
    const allproducts = await Product.findAll();
    res.send(allproducts);
  } catch (err) {
    console.log(err);
  }
}


const create = async (req, res, next) => {
  try {    
    //let data = {"name":"harish","price":35.50}
    //await Product.create(data);   

    //Bulk Insert

    let data = [{"name":"samir","price":45.23},{"name":"kamal","price":20.10}]
    await Product.bulkCreate(data);   


    res.send("Added"); 
  } catch (err) {
    console.log(err);
  }
}


const update = async (req, res, next) => {
  try {    
    await Product.update({name:"naresh"},{where:{id:2}});   
    res.send("Updated"); 
  } catch (err) {
    console.log(err);
  }
}

const remove = async (req, res, next) => {
  try {    
     await Product.destroy({
              where: {
                name: "kamal"
              }
            });
    res.send("Removed"); 
  } catch (err) {
    console.log(err);
  }
}

const custom = async (req, res, next) => {
  try {    

    /*let rdata = await sequelize.query(
      'SELECT * FROM product WHERE name LIKE :search_name',
      {
        replacements: { search_name: '%nar%' },
        type: QueryTypes.SELECT
      }
    );*/

    /*let rdata = await sequelize.query(
      'SELECT p.*,i.status FROM product p inner join inventory i ON p.id=i.pid ',
      {        
        type: QueryTypes.SELECT
      }
    );
    res.send(rdata); */


    /*   

    Product.hasOne(Inventory,{foreignKey:'pid'});

    let rdata = await Product.findAll({
        include:[{ model: Inventory,attributes: ['status']},],
        where : {id:4}
    });
    res.send(rdata);
    */

    
      Student.belongsToMany(Product, { through: Purchase, foreignKey:'sid'});
      Product.belongsToMany(Student, { through: Purchase, foreignKey:'pid' });
      Student.hasMany(Marks,{foreignKey:'sid'}); 

      let rdata = await Student.findAll({
        include:[{ 
                  model: Product, 
                  attributes: ["name","price"],
                  through: {attributes: []}
                },
                { 
                  model: Marks, 
                  attributes: ["subject","marks"],        
                  //where:{subject:"hindi"}
                  //required : true    // true => inner join , false => left outer join      
                },
              ],
        //where : {id:1},
        attributes: ["name","email","phone"]
    });

    res.send(rdata);
  
  }
  catch (err) {
    console.log(err);
   
  }
}


 //===============
  // TRANSACTIONS
  //===============

const custom2 = async (req, res, next) => {

  let t = await sequelize.transaction();
  try {        

    let data = {"name":"bag","price": 12.36}
    await Product.create(data,{transaction:t,lock:true});  
    t.commit();
    res.send("ok");
  }
  catch (err) {
    console.log(err);
    t.rollback();
  }
}

module.exports = {index,create,update,custom,custom2};