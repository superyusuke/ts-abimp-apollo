import { ApolloServer, gql } from "apollo-server";

const authors = [{ id: 1, name: "Nakanishi" }, { id: 2, name: "Sasaki" }];

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const typeDefs = gql`
  type Author {
    name: String
    id: Int!
    blar: Boolean!
  }

  type Query {
    getAuthor(id: Int!): [Author]!
  }
`;

const resolvers = {
  Query: {
    getAuthor: () => authors
  },
  Author: {
    name: (_, __, ___) => "my name",
    id: () => 2,
    blar: (author, _, __) => {
      return true;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

export default server;
