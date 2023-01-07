
let { GraphQLObjectType, GraphQLSchema } = require('graphql');

const { dataList,dataList2,dataList3 } = require('./queries/userQry');

const { userCreate, userUpdate, userDelete } = require('./mutation/UserMut');

const rootQuery = new GraphQLObjectType({
    name:'xyz',
    fields:{
        List : dataList,
        nList : dataList2,
        uDetails : dataList3
    }
});

const rtMutation = new GraphQLObjectType({
    name:'abcd',
    fields:{
        create : userCreate,  
        update : userUpdate,
        delete : userDelete,   
    }
});

module.exports = new GraphQLSchema({query:rootQuery,mutation:rtMutation});



/*

query{List{id,name,email}}

query{nList{id,name,email}}

query{uDetails(id:3){id,name,email}}

-----------------------------------------

query getUserData ($uId :Int){
  uDetails(id:$uId){id,name,email}
}

Query Variables : 
{
  "uId" : 1
}

-----------------------------------------
CREATE :

    mutation{
    create(name:"allu arjun",email:"allu5@gmail.com",phone:"8000000001",age:45),
    {success,message,error}}

UPDATE :

    mutation{
    update(id:7,phone:"5555777722"),{success,message,error}  
    }

    mutation{
    update(id:5,age:26),{success,message,error}  
    }

DELETE:
    mutation{
    delete(id:8),{success,message,error}  
    }




*/