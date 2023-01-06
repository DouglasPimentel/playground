import Koa from "koa";
import Router from "koa-router";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import bodyParser from "koa-bodyparser";
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from "graphql-helix";
import schema from "./graphql/schema";

const app = new Koa();
const router = new Router();

app.use(cors({ maxAge: 86400 }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(async ctx => {
  const request = {
    body: ctx.request.body,
    headers: ctx.req.headers,
    method: ctx.request.method,
    query: ctx.request.query,
  };

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL();
  } else {
    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
    });

    ctx.respond = false;
    sendResult(result, ctx.res);
  }
});

router.get("/", ctx => {
  ctx.response.status = 200;
  ctx.response.body = {
    message: "GraphQL Server",
  };
});

export default app;
