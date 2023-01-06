import { GraphQLObjectType } from "graphql";
import { UserCreate } from "../modules/user/mutations/UserCreate";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "All mutations",
  fields: () => ({
    UserCreate,
  }),
});

export default MutationType;
