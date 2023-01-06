import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { findByEmail, create } from "../services";

type UserCreateArgs = {
  name: string;
  email: string;
  password: string;
};

export const UserCreate = mutationWithClientMutationId({
  name: "UserCreate",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password }: UserCreateArgs) => {
    const userExists = await findByEmail(email);

    if (userExists) {
      return {
        message: "Email already registered",
        userId: null,
        error: "Unable to complete registration",
      };
    }

    try {
      const newUser = await create(name, email, password);

      return {
        message: "User registered successfully",
        userId: newUser._id.toString(),
        error: null,
      };
    } catch (err) {
      throw new Error("Unable to register a new user");
    }
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    userId: {
      type: GraphQLString,
      resolve: ({ userId }) => userId,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
