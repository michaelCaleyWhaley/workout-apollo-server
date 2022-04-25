require("dotenv").config();
// const { getTableList } = require("./databaseServices/listTables");
const { createItem } = require("./databaseServices/createItem");
// const { ApolloServer } = require("apollo-server-lambda");
// const typeDefs = require("./typeDefinitions");
// const resolvers = require("./resolvers");

// const server = new ApolloServer({ typeDefs, resolvers });

// exports.requestHandler = server.createHandler();

// https://www.npmjs.com/package/@aws-sdk/client-dynamodb
// interact with dynamoDB

exports.requestHandler = async () => {
  return "test";
};
