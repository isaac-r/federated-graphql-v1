const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { readFileSync } = require('fs');

const port = 4002;

const typeDefs = gql(readFileSync('./reviews.graphql', { encoding: 'utf-8' }));

const resolvers = {
    Review: {
        product(review) {
            return {
                __typename: "Product",
                upc: review.upc
            };
        }
    }
}

const server = new ApolloServer({ schema: buildSubgraphSchema({ typeDefs, resolvers }) });
server.listen({ port: port }).then(({ url }) => {
    console.log(`🚀 Reviews subgraph ready at ${url}`);
}).catch(err => { console.error(err) });