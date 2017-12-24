import { GraphQLList, GraphQLID } from 'graphql';
import UserType from '../types/User';

import TestData from '../data/users';

export const users = {
  type: new GraphQLList(UserType),
  description: "List of all users",
  resolve: function() {
    return TestData;
  }
};

export const user = {
  type: UserType,
  description: "Object of specified user",
  args: {
    id: { type: GraphQLID },
  },
  resolve: function(parentValue, args, request) {
    const user = TestData.find((user) => user.id === args.id);
    return user;
  }
};

export default {
  users,
  user,
};
