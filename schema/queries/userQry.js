let { GraphQLList, GraphQLInt } = require('graphql');

const userType = require('../typedef/usertype');

const Student = require('../../models/Student');

const dataList = {
    type: new GraphQLList(userType),
    resolve: async(parent,args) => {               
        return await Student.findAll(); 
    }
}

const dataList2 = {
    type: new GraphQLList(userType),
    resolve: async(parent,args,checkNow) => {   


        /* to perform any operations send inside context key from app.js ==>  app.use('/graphql', graphqlHTTP()) */
        //let rdata = await checkNow();
        //console.log(rdata.token);

        /* parent has value send inside rootValue key from app.js ==>  app.use('/graphql', graphqlHTTP()) */
        //console.log(parent);

        return await Student.findAll({where:{id:1}}); 
    }
}


const dataList3 = {
    type: new GraphQLList(userType),
    args : {
        id : {type:GraphQLInt}
    },
    resolve: async(parent,args,checkNow) => {       
        return await Student.findAll({where:{id:args.id}}); 
    }
}

module.exports = {dataList,dataList2,dataList3};