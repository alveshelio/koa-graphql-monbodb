import logger from 'koa-logger';
import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql/schema';
import initDB from './database/config';

const app = new Koa();
initDB();

app.use(logger());
app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})));

app.listen(process.env.PORT || 9000, () => {
  console.warn(`listening on port ${process.env.PORT || 9000}`)
});

app.on('error', err => {
  console.error('server error', err)
});

