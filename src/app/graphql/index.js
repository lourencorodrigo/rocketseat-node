import { ApolloServer as ApolloServerDefault } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import app from '../../app';

class ApolloServer extends ApolloServerDefault {
  async createGraphQLServerOptions(req, res) {
    const options = await super.createGraphQLServerOptions(req, res);
    return {
      ...options,
      validationRules: [depthLimit(1)],
    };
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
