import Koa from 'koa'
import {sleep} from './util'

const app = new Koa();

app.use(async ctx => {
    await sleep(1000);
    ctx.body = 'Hello webpack-koa-demo';
});

console.log('runing at: 3000');
app.listen(3000);