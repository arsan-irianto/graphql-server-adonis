"use-strict";

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Query {
		actors: [Actor]
	}

	type Actor {
		actor_id: Int!
		first_name: String
		last_name: String
		last_update: String
	}
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
