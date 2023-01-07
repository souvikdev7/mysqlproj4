let { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const responseType = new GraphQLObjectType({
    name:'resp',
    fields:()=>({
        success: {type:GraphQLBoolean},
        message:{type:GraphQLString},
        error:{type:GraphQLString}              
    })
});

module.exports = responseType;