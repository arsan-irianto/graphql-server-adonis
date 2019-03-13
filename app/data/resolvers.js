const Database = use("Database");

const resolvers = {
  Query: {
    async actors() {
      return await Database.table("actor").select("*");
    }
  }
};

module.exports = resolvers;
