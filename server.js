import express from 'express';
import { join } from 'path';
import { router as _router, defaults } from 'json-server';
const { static: serveStatic } = express;

const app = express();
const router = _router('db.json');
const middlewares = defaults();

const PORT = process.env.PORT || 5000;

app.use(serveStatic(join(__dirname, 'build')));

app.use('/api', middlewares, router);


app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
