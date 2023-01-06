import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { NodeField, NodesField } from "./NodeInterface";
import { connectionArgs, connectionFromArray } from "graphql-relay";
import { UserConnection } from "../modules/user/UserType";
import { findAll } from "../modules/user/services";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root all queries",
  fields: () => ({
    node: NodeField,
    nodes: NodesField,
    message: {
      type: GraphQLString,
      resolve: () => "Hello from GraphQL Server.",
    },
    users: {
      type: new GraphQLNonNull(UserConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args) => connectionFromArray(await findAll(), args),
    },
  }),
});

export default QueryType;
