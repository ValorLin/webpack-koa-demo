const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello webpack-koa-demo';
});

console.log('runing at: 3000');
app.listen(3000);