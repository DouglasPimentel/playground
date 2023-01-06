import { graphql, useLazyLoadQuery } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        message
      }
    `,
    {},
  );
  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}

export default App;
