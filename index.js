const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
const { readFileSync } = require('fs');

const supergraphSdl = readFileSync('./supergraph.graphql').toString();

// initialize an ApolloGateway instance and pass it the complete composed SDL for our supergraph
// gateway should not be responsible for composing its own supergraph schema
const gateway = new ApolloGateway({
  supergraphSdl
});

// initialize an ApolloServer instance and pass it our gateway via the gateway option
const server = new ApolloServer({
  gateway,
});

// call listen on our server instance to begin listening for incoming requests
server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});