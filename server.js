import logger from 'koa-logger'
import Koa from 'koa'

const app = new Koa();

app.use(logger());
app.listen(process.env.PORT || 9000, () => {
  console.warn(`listening on pourt ${process.env.PORT || 9000}`)
});

app.on('error', err => {
  console.error('server error', err)
});

