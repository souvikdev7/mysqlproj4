const { Op } = require('sequelize');
let dbCon = require('../config/db');
const sequelize = dbCon.SequelizeTZ;

const Student = require('../models/Student');
const Contacts = require('../models/Contacts');
const Cards = require('../models/Cards');


const getDetails = async (req, res, next) => {
    try { 
        //console.log(req.params.id);

        let d_id = 1;
        Student.hasOne(Contacts,{foreignKey:'sid'});
        //Contacts.hasOne(Cards,{foreignKey:'cid'});


        let rdata = await Student.findAll({
            include:[
                { model: Contacts,attributes: ['id','address','favs']}               
            ],
            where : {id:d_id}
        });

        let c_id = rdata[0].contact?.id;

        let mdata = await Cards.findOne({
            where: { cid: c_id },           
          });

        
        res.send(mdata);

    }
    catch(err){console.log(err);}
}


module.exports = {getDetails};