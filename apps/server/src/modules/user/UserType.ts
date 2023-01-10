import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";
import { globalIdField, connectionDefinitions } from "graphql-relay";
import { User } from "./User";
import { NodeInterface } from "../../graphql/NodeInterface";

export const UserType: GraphQLObjectType = new GraphQLObjectType<User>({
  name: "User",
  description: "User data",
  fields: () => ({
    id: globalIdField("User"),
    _id: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ _id }) => _id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ name }) => name,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ email }) => email,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ password }) => password,
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ role }) => role,
    },
    active: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: ({ active }) => active,
    },
    created_at: {
      type: GraphQLString,
      resolve: ({ created_at }) =>
        created_at ? created_at.toISOString() : null,
    },
    updated_at: {
      type: GraphQLString,
      resolve: ({ updated_at }) =>
        updated_at ? updated_at.toISOString() : null,
    },
  }),
  interfaces: () => [NodeInterface],
});

export const UserConnection = connectionDefinitions({
  name: "User",
  nodeType: new GraphQLNonNull(UserType),
});
