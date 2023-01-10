import { GraphQLString, GraphQLBoolean } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { findById, update } from "../services";
import UserType from "../UserType";

type UserUpdateMutationArgs = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
};

export const UserUpdateMutation = mutationWithClientMutationId({
  name: "UserUpdateMutation",
  description: "User update mutation",
  inputFields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
    active: {
      type: GraphQLBoolean,
    },
  },
  mutateAndGetPayload: async ({
    id,
    name,
    email,
    password,
    role,
    active,
  }: UserUpdateMutationArgs) => {
    const userExists = await findById(id);

    if (!userExists) {
      return {
        message: "User not found",
        user: null,
        error: "Not found",
      };
    }

    try {
      const user = await update(id, {
        name,
        email,
        password,
        role,
        active,
      });

      return {
        message: "User updated successfully",
        user: user,
        error: null,
      };
    } catch (error) {
      throw new Error("Unable to update user data");
    }
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    user: {
      type: UserType,
      resolve: ({ user }) => user,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
