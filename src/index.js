import get from './pokemondb';
import stats from './stats';
import Koa from 'koa';
import route from 'koa-route';
import logger from 'koa-logger';

if (module.hot) {
  module.hot.accept('./stats', () => {});
}

const getPokemonFromAPI = async (ctx, name) => {
  try {
   const data = await get(name);
   ctx.body = stats(data);
  } catch (err) {
    ctx.throw(404, err.error.detail);
  }
};

const catchemAll = async (ctx) => {
  ctx.body = 'Gotta catch \'em all!';
} /* Route handler at '/' */

const app = new Koa();
app.use(logger())
   .use(route.get('/', catchemAll)) /* listening on '/' */
   .use(route.get('/:name', getPokemonFromAPI))
   .listen(8000);
console.log('Listening on Port 8000');
