/**
 * @generated SignedSource<<217766d7ecc65eb464f96443a6d266b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from "relay-runtime";
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly message: string | null;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "message",
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AppQuery",
      selections: v0 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "AppQuery",
      selections: v0 /*: any*/,
    },
    params: {
      cacheID: "0184ac4b938049b6bbacd02aaf2b5e83",
      id: null,
      metadata: {},
      name: "AppQuery",
      operationKind: "query",
      text: "query AppQuery {\n  message\n}\n",
    },
  };
})();

(node as any).hash = "d19be94685558a5e6f0c301eac25bc6a";

export default node;
