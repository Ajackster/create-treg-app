import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export interface IUser {
  id: string;
  name: string;
}

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This represents a User",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
  })
});

export default UserType;
