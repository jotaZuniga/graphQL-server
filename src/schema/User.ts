import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean
} from "graphql";

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {
            type: GraphQLID
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },        
        isAdmin: {
            type: GraphQLBoolean
        },
        createdAt: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
        }
    }),
});

export default UserType;