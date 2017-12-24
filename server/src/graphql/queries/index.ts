import { GraphQLObjectType } from 'graphql';
import UserQueries from './UserQueries';

// This is the Root Query
const BrainChildRootQuery = new GraphQLObjectType({
  name: 'BrainChild',
  description: "BrainChild Schema Query Root",
  fields: () => ({
    users: UserQueries.users,
    user: UserQueries.user,
  })
});

export default BrainChildRootQuery;
