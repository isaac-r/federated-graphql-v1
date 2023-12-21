// Reviews subgraph
const resolvers = {
    Product: {
        __resolveReference(reference) {
          return fetchProductByUPC(reference.upc);
        }
      },
    Review: {
      product(review) {
        return {
          __typename: "Product",
           upc: review.upc
        };
      }
    },
  }