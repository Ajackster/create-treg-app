import { GraphQLSchema } from 'graphql';
import query from './queries';

// This is the schema declaration
const BrainChildAppSchema = new GraphQLSchema({ query });

module.exports = BrainChildAppSchema;
