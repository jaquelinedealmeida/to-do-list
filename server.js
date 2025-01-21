import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('db.json');
const middlewares = defaults();

const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);


server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
