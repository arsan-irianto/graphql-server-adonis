"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const GraphqlAdonis = use("ApolloServer");
const schema = require("../app/data/schema");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.route(
  "/graphql",
  ({ request, response }) => {
    return GraphqlAdonis.graphql(
      {
        schema
      },
      request,
      response
    );
  },
  ["GET", "POST"]
);

Route.get("/graphiql", ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpoint: "/graphql" }, request, response);
});
