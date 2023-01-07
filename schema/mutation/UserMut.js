let { GraphQLList, GraphQLString, GraphQLInt } = require('graphql');

const userType = require('../typedef/usertype');

const Student = require('../../models/Student');

const responseType = require('../typedef/responseType');

let createData = async (data) => {    
    return await Student.create(data); 
}


// Create
const userCreate = {
    type: responseType,
    args : {
            name : {type:GraphQLString},
            email : {type:GraphQLString},
            phone : {type:GraphQLString},
            age : {type:GraphQLInt},
        },
    resolve: async(parent,args) => {       
        await Student.create(args);
        return {success:true,message:"created Successfully",error:null};
    }
}


// Update
const userUpdate = {
    type: responseType,
    args : {
            id : {type:GraphQLInt},
            name : {type:GraphQLString},
            email : {type:GraphQLString},
            phone : {type:GraphQLString},
            age : {type:GraphQLInt},
        },
    resolve: async(parent,args) => {        
        let uid = args.id;
        delete args.id;
        await Student.update(args,{where:{id:uid}});       
        return {success:true,message:"Updated Successfully",error:null};
    }
}

// Delete
const userDelete = {
    type: responseType,
    args : {
            id : {type:GraphQLInt}          
        },
    resolve: async(parent,args) => {        
        let uid = args.id;        
        await Student.destroy({where: {id:uid}});
        return {success:true,message:"Deleted Successfully",error:null};
    }
}

module.exports = {userCreate, userUpdate, userDelete};