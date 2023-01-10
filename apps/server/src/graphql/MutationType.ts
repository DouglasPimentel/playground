import { GraphQLObjectType } from "graphql";
import { UserCreate } from "../modules/user/mutations/UserCreate";
import { UserUpdateMutation } from "../modules/user/mutations/UserUpdateMutation";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "All mutations",
  fields: () => ({
    UserCreate,
    UserUpdateMutation,
  }),
});

export default MutationType;
