const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const schema = require('./dist/graphql/schema');

const graphqlPort = 3000;
const appPort = 8080;

const graphql = express();
graphql.use(cors());
graphql.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}));

graphql.listen(graphqlPort);
console.log('GraphQL API server running at localhost:' + graphqlPort);

const app = express();
app.use(cors());
// Serve static files from the React app
app.use(express.static(__dirname + '/../client/dist/'));

app.listen(appPort);
console.log('App server running at localhost:' + appPort);

