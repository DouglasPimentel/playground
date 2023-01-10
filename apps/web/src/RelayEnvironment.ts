import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";

async function fetchRelay(params: RequestParameters, variables: Variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`,
  );
  return await fetchGraphQL(params.text, variables);
}

const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export default RelayEnvironment;
