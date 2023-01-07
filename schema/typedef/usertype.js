let { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const userType = new GraphQLObjectType({
    name:'user',
    fields:()=>({
        id: {type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString}              
    })
});

module.exports = userType;