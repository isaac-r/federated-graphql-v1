const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');

const port = 4001;

const typeDefs = gql(readFileSync('./subgraphs/products/products.graphql', { encoding: 'utf-8' }));

const resolvers = {}

getProduc = () => {

}

const server = new ApolloServer({ schema: buildSubgraphSchema({ typeDefs, resolvers }) });
server.listen({ port: port }).then(({ url }) => {
    console.log(`🚀 Products subgraph ready at ${url}`);
}).catch(err => { console.error(err) });