import Koa from 'koa';
import send from 'koa-send';

const app = new Koa();

// response
app.use(async ctx => {
  ctx.set('Content-Security-Policy', 'frame-src https://expressjs.com/');
  await send(ctx, './static/index.html');
});

app.listen(3000);