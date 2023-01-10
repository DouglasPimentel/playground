import { nodeDefinitions, fromGlobalId } from "graphql-relay";
import { findById } from "../modules/user/services";
import { User } from "../modules/user/User";
import UserType from "../modules/user/UserType";

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  async (globalId: string) => {
    const { id: userGlobalID, type } = fromGlobalId(globalId);

    if (type === "User") {
      return await findById(userGlobalID);
    }

    return null;
  },
  // @ts-ignore
  obj => {
    if (obj instanceof User) return UserType;
    return null;
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
export const NodesField = nodesField;
